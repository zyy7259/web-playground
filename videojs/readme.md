# 拉流地址

- RTMP: rtmp://v1.live.126.net/live/f605e6ac535f40bd90c976655cc0f7ef
- HTTP: http://v1.live.126.net/live/f605e6ac535f40bd90c976655cc0f7ef.flv
- HLS: http://v1.live.126.net/live/f605e6ac535f40bd90c976655cc0f7ef/playlist.m3u8

# 延时

- 理论上rtmp最快，http其次，hls最慢
- 跟协议有关，优化的空间不大，hls延时在10秒左右，算是正常
- hls延时先记录下来，这是切片的问题

# 测试报告

flowplayer, jwplayer, sewise player
分别用html5播放，flash播放，各种协议rtmp，http-flv，hls的结果
video.js包括了哪些功能，后面是否可扩展开发
