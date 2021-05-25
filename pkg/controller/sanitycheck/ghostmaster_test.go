package sanitycheck

import (
	"context"
	"testing"

	kapiv1 "k8s.io/api/core/v1"
	metav1 "k8s.io/apimachinery/pkg/apis/meta/v1"

	rapi "github.com/TheWeatherCompany/icm-redis-operator/pkg/api/redis/v1alpha1"
	"github.com/TheWeatherCompany/icm-redis-operator/pkg/controller/pod"
	"github.com/TheWeatherCompany/icm-redis-operator/pkg/redis"
	"github.com/TheWeatherCompany/icm-redis-operator/pkg/redis/fake/admin"
)

func TestFixGhostMasterNodes(t *testing.T) {
	pod1 := newPod("pod1", "node1", "10.0.0.1")
	pod2 := newPod("pod2", "node2", "10.0.0.2")
	pod3 := newPod("pod3", "node3", "10.0.0.3")
	redis1 := redis.Node{ID: "redis1", Role: "slave", IP: "10.0.0.1", Pod: pod1}
	redis2 := redis.Node{ID: "redis2", Role: "master", IP: "10.0.0.2", Pod: pod2, Slots: redis.SlotSlice{1}}
	redisGhostMaster := redis.Node{ID: "redis3", Role: "master", IP: "10.0.0.3", Pod: pod3, Slots: redis.SlotSlice{}}
	ctx := context.Background()

	type args struct {
		adminFunc  func() redis.AdminInterface
		podControl pod.RedisClusterControlInterface
		cluster    *rapi.RedisCluster
		info       *redis.ClusterInfos
	}
	tests := []struct {
		name    string
		args    args
		want    bool
		wantErr bool
	}{

		{
			name: "no gost",
			args: args{
				adminFunc: func() redis.AdminInterface {
					fakeAdmin := admin.NewFakeAdmin()

					return fakeAdmin
				},
				podControl: newFakecontrol([]*kapiv1.Pod{pod1, pod2}),
				cluster: &rapi.RedisCluster{
					ObjectMeta: metav1.ObjectMeta{Name: "test-cluster", Namespace: "test-ns"},
				},
				info: &redis.ClusterInfos{
					Infos: map[string]*redis.NodeInfos{
						redis1.ID: {Node: &redis1, Friends: redis.Nodes{&redis2}},
						redis2.ID: {Node: &redis2, Friends: redis.Nodes{&redis1}},
					},
					Status: redis.ClusterInfoConsistent,
				},
			},
			want:    false,
			wantErr: false,
		},
		{
			name: "gost redis3",
			args: args{
				adminFunc: func() redis.AdminInterface {
					fakeAdmin := admin.NewFakeAdmin()

					return fakeAdmin
				},
				podControl: newFakecontrol([]*kapiv1.Pod{pod1, pod2}),
				cluster: &rapi.RedisCluster{
					ObjectMeta: metav1.ObjectMeta{Name: "test-cluster", Namespace: "test-ns"},
				},
				info: &redis.ClusterInfos{
					Infos: map[string]*redis.NodeInfos{
						redis1.ID: {Node: &redis1, Friends: redis.Nodes{&redis2, &redisGhostMaster}},
						redis2.ID: {Node: &redis2, Friends: redis.Nodes{&redis1, &redisGhostMaster}},
					},
					Status: redis.ClusterInfoConsistent,
				},
			},
			want:    true,
			wantErr: false,
		},
	}
	for _, tt := range tests {
		t.Run(tt.name, func(t *testing.T) {
			admin := tt.args.adminFunc()
			got, err := FixGhostMasterNodes(ctx, admin, tt.args.podControl, tt.args.cluster, tt.args.info)
			if (err != nil) != tt.wantErr {
				t.Errorf("FixGhostMasterNodes() error = %v, wantErr %v", err, tt.wantErr)
				return
			}
			if got != tt.want {
				t.Errorf("FixGhostMasterNodes() = %v, want %v", got, tt.want)
			}
		})
	}
}
