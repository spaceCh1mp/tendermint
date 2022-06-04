(window.webpackJsonp=window.webpackJsonp||[]).push([[214],{810:function(t,e,a){"use strict";a.r(e);var o=a(1),n=Object(o.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"light-client-protocol"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#light-client-protocol"}},[t._v("#")]),t._v(" Light Client Protocol")]),t._v(" "),a("p",[t._v("Light clients are an important part of the complete blockchain system for most\napplications. Tendermint provides unique speed and security properties for\nlight client applications.")]),t._v(" "),a("p",[t._v("See our "),a("a",{attrs:{href:"https://pkg.go.dev/github.com/tendermint/tendermint/lite2?tab=doc",target:"_blank",rel:"noopener noreferrer"}},[t._v("lite\npackage"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"overview"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#overview"}},[t._v("#")]),t._v(" Overview")]),t._v(" "),a("p",[t._v("The objective of the light client protocol is to get a commit for a recent\nblock hash where the commit includes a majority of signatures from the last\nknown validator set. From there, all the application state is verifiable with\n"),a("a",{attrs:{href:"https://github.com/tendermint/spec/blob/953523c3cb99fdb8c8f7a2d21e3a99094279e9de/spec/blockchain/encoding.md#iavl-tree",target:"_blank",rel:"noopener noreferrer"}},[t._v("merkle\nproofs"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"properties"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[t._v("#")]),t._v(" Properties")]),t._v(" "),a("ul",[a("li",[t._v("You get the full collateralized security benefits of Tendermint; No\nneed to wait for confirmations.")]),t._v(" "),a("li",[t._v("You get the full speed benefits of Tendermint; transactions\ncommit instantly.")]),t._v(" "),a("li",[t._v("You can get the most recent version of the application state\nnon-interactively (without committing anything to the blockchain). For\nexample, this means that you can get the most recent value of a name from the\nname-registry without worrying about fork censorship attacks, without posting\na commit and waiting for confirmations. It's fast, secure, and free!")])]),t._v(" "),a("h2",{attrs:{id:"where-to-obtain-trusted-height-hash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#where-to-obtain-trusted-height-hash"}},[t._v("#")]),t._v(" Where to obtain trusted height & hash?")]),t._v(" "),a("p",[t._v("https://pkg.go.dev/github.com/tendermint/tendermint/lite2?tab=doc#TrustOptions")]),t._v(" "),a("p",[t._v("One way to obtain semi-trusted hash & height is to query multiple full nodes\nand compare their hashes:")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCBjdXJsIC1zIGh0dHBzOi8vMjMzLjEyMy4wLjE0MDoyNjY1NzoyNjY1Ny9jb21taXQgfCBqcSAmcXVvdDt7aGVpZ2h0OiAucmVzdWx0LnNpZ25lZF9oZWFkZXIuaGVhZGVyLmhlaWdodCwgaGFzaDogLnJlc3VsdC5zaWduZWRfaGVhZGVyLmNvbW1pdC5ibG9ja19pZC5oYXNofSZxdW90Owp7CiAgJnF1b3Q7aGVpZ2h0JnF1b3Q7OiAmcXVvdDsyNzMmcXVvdDssCiAgJnF1b3Q7aGFzaCZxdW90OzogJnF1b3Q7MTg4RjRGMzZDQkNEMkM5MUI1NzUwOUJCRjIzMUM3NzdFNzlCNTJFRTNFMEQ5MEQwNkIxQTI1RUIxNkU2RTIzRCZxdW90Owp9Cg=="}}),t._v(" "),a("h2",{attrs:{id:"http-proxy"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-proxy"}},[t._v("#")]),t._v(" HTTP proxy")]),t._v(" "),a("p",[t._v("Tendermint comes with a built-in "),a("code",[t._v("tendermint lite")]),t._v(" command, which can be used\nto run a light client proxy server, verifying Tendermint rpc. All calls that\ncan be tracked back to a block header by a proof will be verified before\npassing them back to the caller. Other than that, it will present the same\ninterface as a full Tendermint node.")]),t._v(" "),a("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"JCB0ZW5kZXJtaW50IGxpdGUgc3VwZXJub3ZhIC1wIHRjcDovLzIzMy4xMjMuMC4xNDA6MjY2NTcgXAogIC13IHRjcDovLzE3OS42My4yOS4xNToyNjY1Nyx0Y3A6Ly8xNDQuMTY1LjIyMy4xMzU6MjY2NTcgXAogIC0taGVpZ2h0PTEwIC0taGFzaD0zN0U5QTZERDNGQTI1RTgzQjIyQzE4ODM1NDAxRThFNTYwODhEMEQ3QUJDNkZEOTlGQ0RDOTIwREQ3NkMxQzU3Cg=="}}),t._v(" "),a("p",[t._v("For additional options, run "),a("code",[t._v("tendermint lite --help")]),t._v(".")])],1)}),[],!1,null,null,null);e.default=n.exports}}]);