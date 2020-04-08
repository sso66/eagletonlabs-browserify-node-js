### Node.js UDP Server and Client Overview
> The **User Datagram Protocol (UDP)** is one of the core members of the Internet protocol suite.
> With UDP, Node.js applications can send messages, in this case referred to as *datagrams*, to other hosts
> on an Internet Protocol (IP) network.
>
> Prior communications are not required in order to set up communication channels and data paths.

> UDP uses simple connectionless communications model with a minimum of protocol mechanisms. 
> UDP provides checksums for data integrity, and port numbers for addressing functions at the source
> and the destination of the datagram.
>
> It has no handshaking dialogues, and thus exposes the user's program to any reliability of the underlying
> network; there is no gurentee of delivery, ordering, or duplicate protection.
>
> If error-correction facilities are needed at the network inferface, an application may use the **Transmission
> Control Protocol(TCP)** or Stream Control Transmission Protocol (SCTP) which are designed for that purpose.

> UDP is suitable for purposes where error checking and correction are not either necessary or performed in
> the Node.js application; UDP avoides the overhead of such processing the protocal stack.
>
> *Time-sensitive* Node.js applications often used UDP because dropping packages is perferable to waiting for
> packages delayed due to retransmission, which may not be an option in a real-time system, such as TCP/IP.

#### Attributes
#### Ports
#### UDP datagram structure
#### Checksum computation
  - IPv4 pseudo header
  - IPv6 psuedo header
#### Reliability and congestion control solutions
#### Applications
#### Comparison of UDP and TCP

