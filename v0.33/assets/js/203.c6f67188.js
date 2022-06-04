(window.webpackJsonp=window.webpackJsonp||[]).push([[203],{798:function(e,t,s){"use strict";s.r(t);var r=s(1),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"peer-exchange"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#peer-exchange"}},[e._v("#")]),e._v(" Peer Exchange")]),e._v(" "),s("h2",{attrs:{id:"channels"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#channels"}},[e._v("#")]),e._v(" Channels")]),e._v(" "),s("p",[e._v("Pex has one channel. The channel identifier is listed below.")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Name")]),e._v(" "),s("th",[e._v("Number")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("PexChannel")]),e._v(" "),s("td",[e._v("0")])])])]),e._v(" "),s("h2",{attrs:{id:"message-types"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#message-types"}},[e._v("#")]),e._v(" Message Types")]),e._v(" "),s("h3",{attrs:{id:"pexrequest"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pexrequest"}},[e._v("#")]),e._v(" PexRequest")]),e._v(" "),s("p",[e._v("PexRequest is an empty message requesting a list of peers.")]),e._v(" "),s("blockquote",[s("p",[e._v("EmptyRequest")])]),e._v(" "),s("h3",{attrs:{id:"pexresponse"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pexresponse"}},[e._v("#")]),e._v(" PexResponse")]),e._v(" "),s("p",[e._v("PexResponse is an list of net addresses provided to a peer to dial.")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Name")]),e._v(" "),s("th",[e._v("Type")]),e._v(" "),s("th",[e._v("Description")]),e._v(" "),s("th",[e._v("Field Number")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("addresses")]),e._v(" "),s("td",[e._v("repeated "),s("a",{attrs:{href:"#PexAddress"}},[e._v("PexAddress")])]),e._v(" "),s("td",[e._v("List of peer addresses available to dial")]),e._v(" "),s("td",[e._v("1")])])])]),e._v(" "),s("h3",{attrs:{id:"pexaddress"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#pexaddress"}},[e._v("#")]),e._v(" PexAddress")]),e._v(" "),s("p",[e._v("PexAddress provides needed information for a node to dial a peer. This is in the form of a "),s("code",[e._v("URL")]),e._v(" that gets parsed\ninto a "),s("code",[e._v("NodeAddress")]),e._v(". See "),s("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/f2a8f5e054cf99ebe246818bb6d71f41f9a30faa/internal/p2p/address.go#L43",target:"_blank",rel:"noopener noreferrer"}},[e._v("ParseNodeAddress"),s("OutboundLink")],1),e._v(" for more details.")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Name")]),e._v(" "),s("th",[e._v("Type")]),e._v(" "),s("th",[e._v("Description")]),e._v(" "),s("th",[e._v("Field Number")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("url")]),e._v(" "),s("td",[e._v("string")]),e._v(" "),s("td",[e._v("See "),s("a",{attrs:{href:"https://golang.org/pkg/net/url/#URL",target:"_blank",rel:"noopener noreferrer"}},[e._v("golang url"),s("OutboundLink")],1)]),e._v(" "),s("td",[e._v("1")])])])]),e._v(" "),s("h3",{attrs:{id:"message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#message"}},[e._v("#")]),e._v(" Message")]),e._v(" "),s("p",[e._v("Message is a "),s("a",{attrs:{href:"https://developers.google.com/protocol-buffers/docs/proto#oneof",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("oneof")]),e._v(" protobuf type"),s("OutboundLink")],1),e._v(". The one of consists of two messages.")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("Name")]),e._v(" "),s("th",[e._v("Type")]),e._v(" "),s("th",[e._v("Description")]),e._v(" "),s("th",[e._v("Field Number")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("pex_request")]),e._v(" "),s("td",[s("a",{attrs:{href:"#PexRequest"}},[e._v("PexRequest")])]),e._v(" "),s("td",[e._v("Empty request asking for a list of addresses to dial")]),e._v(" "),s("td",[e._v("3")])]),e._v(" "),s("tr",[s("td",[e._v("pex_response")]),e._v(" "),s("td",[s("a",{attrs:{href:"#PexResponse"}},[e._v("PexResponse")])]),e._v(" "),s("td",[e._v("List of addresses to dial")]),e._v(" "),s("td",[e._v("4")])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);