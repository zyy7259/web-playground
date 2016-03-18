
# Vision

- video/audio chat
- peer-to-peer data sharing

# Caniuse

- getUserMedia is in Chrome, Opera, Firefox and Edge.
- RTCPeerConnection is in Chrome, Opera and Firefox.
- RTCDataChannel is in Chrome, Opera and Firefox.

# Steps

- Get streaming audio, video or other data.

- Exchange network information such as IP addresses and ports, even through NATs and firewalls.

- Exchange information about media and client capability, such as resolution and codecs.

- Communicate streaming audio, video or data.

# Signaling

WebRTC uses RTCPeerConnection to communicate streaming data between browsers (aka peers), but also need a mechanism to coordinate communication and to send control messages, a process known as signaling. Signaling methods and protocols are not specified by WebRTC.

Signaling is used to exchange three types of information:

- Session control messages: to initialize or close communication and report errors.
- Media capabilities: what codecs and resolutions can be handled by my browser and the other.
- Network configuration: peer's IP address and port.

## exchange media information

Signaling to exchange media information proceeds by exchange an offer and answer using the SDP (Session Description Protocol).

The offer and answer can be tweaked before being set as the local or remote description, by editing the SDP text.

## finding candidtes

Finding candidates refers to the process of finding network interfaces and ports. WebRTC use ICE to find IP address and port.

The [STUN](http://en.wikipedia.org/wiki/STUN) protocol and its extension [TURN](http://en.wikipedia.org/wiki/Traversal_Using_Relay_NAT) are used by the [ICE](http://en.wikipedia.org/wiki/Interactive_Connectivity_Establishment) framework to enable RTCPeerConnection to cope with NAT traversal and other network vagaries.

ICE is a framework for connecting peers. Initially, IEC tries to connect peers directyly via UDP. In this process, STUN servers have a single task: to enable a peer behind a NAT to find out its public address and port.

![Using STUN servers to get public IP:port addresses](img/stun.png 'STUN')

If UDP fails, ICE tries TCP: first HTTP, then HTTPS.

If direct connection fails - in particular, because of enterprise NAT traversal and firewalls - ICE uses an intermediary (relay) TURN server.

![The fully Monty: STUN, TURN and signaling](img/turn.png 'TURN')

In short, ICE will first use STUN to directly connect peers and, if that fails, will fall back to a TURN relay server.

## notes

RTCPeerConnection won't start gathering candidates until setLocalDescription() is called.

The acquisition and exchange of network and media information can be done simultaneously, but both processes must have completed before audio and video streaming between peers can begin.

Once the signaling process has completed successfully, data can be streamed directly peer to peer, or if that fails, via an intermediary relay server.

# Configuration

see [w3c](https://www.w3.org/TR/webrtc/#configuration)

## URLs for STUN and/or TURN

```javascript
var config = {
    "iceServers": [
        {
            "urls": "stun:stun1.example.net"
        },
        {
            "urls": ["turns:turn.example.org", "turn:turn.example.net"],
            "username": "user",
            "credential": "myPassword",
            "credentialType": "password"
        }
    ]
}
var pc = new RTCPeerConnection(config);
```

# Constraints

Set values for video resolution, aspect ratio, facing mode (front or back camera), frame rate, height and width for getUserMedia() <del>and RTCPeerConnection addStream()</del> calls.

Removed constraints argument from addStream(). See [w3c](https://www.w3.org/TR/webrtc/)

<del>The optional second 'constraints' parameter of the RTCPeerConnection() constructor is different from the constraints used by getUserMedia(). See [w3c](http://www.w3.org/TR/webrtc/#constraints) for more information.</del>

# Network topologies

## MCU

Via [MCU](http://en.wikipedia.org/wiki/Multipoint_control_unit) (Multipoint Control Unit), a server can distributes media between a large numbers of participants.

MCUs can cope with different resolutions, codecs and frame rates, handle transcoding, do selective stream forwarding, and mix or record audio and video.

## Gateway

Gateway servers can enable a WebRTC app running on a browser to interact with devices such as [telephones](http://en.wikipedia.org/wiki/Public_switched_telephone_network) (aka PSTN) and with [VOIP](http://en.wikipedia.org/wiki/Voice_over_IP) systems.

# Use of RTCDataChannel

- [Cube Slam](http://www.cubeslam.com/) game uses the API to communicate game state.
- [Sharefest](http://www.sharefest.me/) enables file sharing via the API.
- [peerCDN](https://peercdn.com/) offers a glimpse of how WebRTC could enable peer-to-peer content distribution.

# Warning

- Chrome will deprecate HTTP access for getUserMedia() at the end of 2015 due to it being classified as a [Powerful feature](https://sites.google.com/a/chromium.org/dev/Home/chromium-security/deprecating-powerful-features-on-insecure-origins).

- getUserMedia() must be on a server/localhost, not the local file system, otherwise an error will be thrown.

- getUserMedia constraints set in one browser tab affect constraints for all tabs opend subsequently. Setting a disallowed value for constraints gives a 'PERMISSION_DENIED' error.

# Developer tools

## WebRTC stats

WebRTC stats for an ongoing session can be found at:

- chrome://webrtc-internals page in Chrome
- opera://webrtc-internals page in Opera
- about:webrtc page in Firefox

## Frameworks

- Video chat
    - [SimpleWebRTC](https://github.com/henrikjoreteg/SimpleWebRTC)
    - [easyRTC](https://github.com/priologic/easyrtc)
    - [webRTC.io](https://github.com/webRTC/webRTC.io)
- Peer-to-peer data
    - [PeerJS](http://peerjs.com/)
    - [Sharefest](https://github.com/peer5/sharefest)

# Learn more

- [webrtc.org](http://www.webrtc.org/) is home to all things WebRTC: demos, documentation and discussion
- [WebRTC on GitHub](https://github.com/webrtc)
- [WebRTC presentation at Google I/O 2013](https://www.youtube.com/watch?v=p2HzZkd2A40) (the slides are at [io13webrtc.appspot.com](http://io13webrtc.appspot.com/))
- [webrtc.org demo page](https://github.com/webrtc/samples)
- Google Developers [Google Talk documentation](https://developers.google.com/talk/libjingle/important_concepts#connections), which gives more information about NAT traversal, STUN, relay servers and candidate gathering.

# Standards and protocols

- [The WebRTC W3C Working Draft](https://www.w3.org/TR/webrtc/)
- [W3C Working Draft: Media Capture and Streams](https://www.w3.org/TR/mediacapture-streams/)
- [The WebRTC W3C Editor's Draft](http://w3c.github.io/webrtc-pc/)
- [W3C Editor's Draft: Media Capture and Streams](http://w3c.github.io/mediacapture-main/getusermedia.html)
