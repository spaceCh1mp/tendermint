(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{635:function(e,t,n){"use strict";n.r(t);var a=n(1),o=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"using-abci-cli"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#using-abci-cli"}},[e._v("#")]),e._v(" Using ABCI-CLI")]),e._v(" "),n("p",[e._v("To facilitate testing and debugging of ABCI servers and simple apps, we\nbuilt a CLI, the "),n("code",[e._v("abci-cli")]),e._v(", for sending ABCI messages from the command\nline.")]),e._v(" "),n("h2",{attrs:{id:"install"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[e._v("#")]),e._v(" Install")]),e._v(" "),n("p",[e._v("Make sure you "),n("a",{attrs:{href:"https://golang.org/doc/install",target:"_blank",rel:"noopener noreferrer"}},[e._v("have Go installed"),n("OutboundLink")],1),e._v(".")]),e._v(" "),n("p",[e._v("Next, install the "),n("code",[e._v("abci-cli")]),e._v(" tool and example applications:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Z2l0IGNsb25lIGh0dHBzOi8vZ2l0aHViLmNvbS90ZW5kZXJtaW50L3RlbmRlcm1pbnQuZ2l0CmNkIHRlbmRlcm1pbnQKbWFrZSBpbnN0YWxsX2FiY2kK"}}),e._v(" "),n("p",[e._v("Now run "),n("code",[e._v("abci-cli")]),e._v(" to see the list of commands:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"VXNhZ2U6CiAgYWJjaS1jbGkgW2NvbW1hbmRdCgpBdmFpbGFibGUgQ29tbWFuZHM6CiAgYmF0Y2ggICAgICAgICAgUnVuIGEgYmF0Y2ggb2YgYWJjaSBjb21tYW5kcyBhZ2FpbnN0IGFuIGFwcGxpY2F0aW9uCiAgY2hlY2tfdHggICAgICAgVmFsaWRhdGUgYSB0eAogIGNvbW1pdCAgICAgICAgIENvbW1pdCB0aGUgYXBwbGljYXRpb24gc3RhdGUgYW5kIHJldHVybiB0aGUgTWVya2xlIHJvb3QgaGFzaAogIGNvbnNvbGUgICAgICAgIFN0YXJ0IGFuIGludGVyYWN0aXZlIGFiY2kgY29uc29sZSBmb3IgbXVsdGlwbGUgY29tbWFuZHMKICBmaW5hbGl6ZV9ibG9jayBTZW5kIGEgc2V0IG9mIHRyYW5zYWN0aW9ucyB0byB0aGUgYXBwbGljYXRpb24KICBrdnN0b3JlICAgICAgICBBQkNJIGRlbW8gZXhhbXBsZQogIGVjaG8gICAgICAgICAgIEhhdmUgdGhlIGFwcGxpY2F0aW9uIGVjaG8gYSBtZXNzYWdlCiAgaGVscCAgICAgICAgICAgSGVscCBhYm91dCBhbnkgY29tbWFuZAogIGluZm8gICAgICAgICAgIEdldCBzb21lIGluZm8gYWJvdXQgdGhlIGFwcGxpY2F0aW9uCiAgcXVlcnkgICAgICAgICAgUXVlcnkgdGhlIGFwcGxpY2F0aW9uIHN0YXRlCiAgc2V0X29wdGlvbiAgICAgU2V0IGFuIG9wdGlvbnMgb24gdGhlIGFwcGxpY2F0aW9uCgpGbGFnczoKICAgICAgLS1hYmNpIHN0cmluZyAgICAgIHNvY2tldCBvciBncnBjIChkZWZhdWx0ICZxdW90O3NvY2tldCZxdW90OykKICAgICAgLS1hZGRyZXNzIHN0cmluZyAgIGFkZHJlc3Mgb2YgYXBwbGljYXRpb24gc29ja2V0IChkZWZhdWx0ICZxdW90O3RjcDovLzEyNy4wLjAuMToyNjY1OCZxdW90OykKICAtaCwgLS1oZWxwICAgICAgICAgICAgIGhlbHAgZm9yIGFiY2ktY2xpCiAgLXYsIC0tdmVyYm9zZSAgICAgICAgICBwcmludCB0aGUgY29tbWFuZCBhbmQgcmVzdWx0cyBhcyBpZiBpdCB3ZXJlIGEgY29uc29sZSBzZXNzaW9uCgpVc2UgJnF1b3Q7YWJjaS1jbGkgW2NvbW1hbmRdIC0taGVscCZxdW90OyBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBhIGNvbW1hbmQuCg=="}}),e._v(" "),n("h2",{attrs:{id:"kvstore-first-example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#kvstore-first-example"}},[e._v("#")]),e._v(" KVStore - First Example")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("abci-cli")]),e._v(" tool lets us send ABCI messages to our application, to\nhelp build and debug them.")]),e._v(" "),n("p",[e._v("The most important messages are "),n("code",[e._v("finalize_block")]),e._v(", "),n("code",[e._v("check_tx")]),e._v(", and "),n("code",[e._v("commit")]),e._v(",\nbut there are others for convenience, configuration, and information\npurposes.")]),e._v(" "),n("p",[e._v("We'll start a kvstore application, which was installed at the same time\nas "),n("code",[e._v("abci-cli")]),e._v(" above. The kvstore just stores transactions in a merkle\ntree.")]),e._v(" "),n("p",[e._v("Its code can be found\n"),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/abci/cmd/abci-cli/abci-cli.go",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),n("OutboundLink")],1),e._v("\nand looks like:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuYyBjbWRLVlN0b3JlKGNtZCAqY29icmEuQ29tbWFuZCwgYXJncyBbXXN0cmluZykgZXJyb3IgewogICAgbG9nZ2VyIDo9IGxvZy5OZXdUTUxvZ2dlcihsb2cuTmV3U3luY1dyaXRlcihvcy5TdGRvdXQpKQoKICAgIC8vIENyZWF0ZSB0aGUgYXBwbGljYXRpb24gLSBpbiBtZW1vcnkgb3IgcGVyc2lzdGVkIHRvIGRpc2sKICAgIHZhciBhcHAgdHlwZXMuQXBwbGljYXRpb24KICAgIGlmIGZsYWdQZXJzaXN0ID09ICZxdW90OyZxdW90OyB7CiAgICAgICAgYXBwID0ga3ZzdG9yZS5OZXdLVlN0b3JlQXBwbGljYXRpb24oKQogICAgfSBlbHNlIHsKICAgICAgICBhcHAgPSBrdnN0b3JlLk5ld1BlcnNpc3RlbnRLVlN0b3JlQXBwbGljYXRpb24oZmxhZ1BlcnNpc3QpCiAgICAgICAgYXBwLigqa3ZzdG9yZS5QZXJzaXN0ZW50S1ZTdG9yZUFwcGxpY2F0aW9uKS5TZXRMb2dnZXIobG9nZ2VyLldpdGgoJnF1b3Q7bW9kdWxlJnF1b3Q7LCAmcXVvdDtrdnN0b3JlJnF1b3Q7KSkKICAgIH0KCiAgICAvLyBTdGFydCB0aGUgbGlzdGVuZXIKICAgIHNydiwgZXJyIDo9IHNlcnZlci5OZXdTZXJ2ZXIoZmxhZ0FkZHJELCBmbGFnQWJjaSwgYXBwKQogICAgaWYgZXJyICE9IG5pbCB7CiAgICAgICAgcmV0dXJuIGVycgogICAgfQoKICAgIC8vIFN0b3AgdXBvbiByZWNlaXZpbmcgU0lHVEVSTSBvciBDVFJMLUMuCgljdHgsIGNhbmNlbCA6PSBzaWduYWwuTm90aWZ5Q29udGV4dChjb250ZXh0LkJhY2tncm91bmQoKSwgb3MuSW50ZXJydXB0LCBzeXNjYWxsLlNJR1RFUk0pCglkZWZlciBjYW5jZWwoKQoKICAgIHNydi5TZXRMb2dnZXIobG9nZ2VyLldpdGgoJnF1b3Q7bW9kdWxlJnF1b3Q7LCAmcXVvdDthYmNpLXNlcnZlciZxdW90OykpCiAgICBpZiBlcnIgOj0gc3J2LlN0YXJ0KGN0eCk7IGVyciAhPSBuaWwgewogICAgICAgIHJldHVybiBlcnIKICAgIH0KCiAgICAvLyBSdW4gdW50aWwgc2h1dGRvd24uCiZsdDstY3R4LkRvbmUoKQpzcnYuV2FpdCgpCn0K"}}),e._v(" "),n("p",[e._v("Start by running:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"YWJjaS1jbGkga3ZzdG9yZQo="}}),e._v(" "),n("p",[e._v("And in another terminal, run")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"YWJjaS1jbGkgZWNobyBoZWxsbwphYmNpLWNsaSBpbmZvCg=="}}),e._v(" "),n("p",[e._v("You'll see something like:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"LSZndDsgZGF0YTogaGVsbG8KLSZndDsgZGF0YS5oZXg6IDY4NjU2QzZDNkYK"}}),e._v(" "),n("p",[e._v("and:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"LSZndDsgZGF0YTogeyZxdW90O3NpemUmcXVvdDs6MH0KLSZndDsgZGF0YS5oZXg6IDdCMjI3MzY5N0E2NTIyM0EzMDdECg=="}}),e._v(" "),n("p",[e._v("An ABCI application must provide two things:")]),e._v(" "),n("ul",[n("li",[e._v("a socket server")]),e._v(" "),n("li",[e._v("a handler for ABCI messages")])]),e._v(" "),n("p",[e._v("When we run the "),n("code",[e._v("abci-cli")]),e._v(" tool we open a new connection to the\napplication's socket server, send the given ABCI message, and wait for a\nresponse.")]),e._v(" "),n("p",[e._v("The server may be generic for a particular language, and we provide a\n"),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/tree/master/abci/server",target:"_blank",rel:"noopener noreferrer"}},[e._v("reference implementation in\nGolang"),n("OutboundLink")],1),e._v(". See the\n"),n("a",{attrs:{href:"https://github.com/tendermint/awesome#ecosystem",target:"_blank",rel:"noopener noreferrer"}},[e._v("list of other ABCI implementations"),n("OutboundLink")],1),e._v(" for servers in\nother languages.")]),e._v(" "),n("p",[e._v("The handler is specific to the application, and may be arbitrary, so\nlong as it is deterministic and conforms to the ABCI interface\nspecification.")]),e._v(" "),n("p",[e._v("So when we run "),n("code",[e._v("abci-cli info")]),e._v(", we open a new connection to the ABCI\nserver, which calls the "),n("code",[e._v("Info()")]),e._v(" method on the application, which tells\nus the number of transactions in our Merkle tree.")]),e._v(" "),n("p",[e._v("Now, since every command opens a new connection, we provide the\n"),n("code",[e._v("abci-cli console")]),e._v(" and "),n("code",[e._v("abci-cli batch")]),e._v(" commands, to allow multiple ABCI\nmessages to be sent over a single connection.")]),e._v(" "),n("p",[e._v("Running "),n("code",[e._v("abci-cli console")]),e._v(" should drop you in an interactive console for\nspeaking ABCI messages to your application.")]),e._v(" "),n("p",[e._v("Try running these commands:")]),e._v(" "),n("tm-code-block",{staticClass:"codeblock",attrs:{language:"sh",base64:"Jmd0OyBlY2hvIGhlbGxvCi0mZ3Q7IGNvZGU6IE9LCi0mZ3Q7IGRhdGE6IGhlbGxvCi0mZ3Q7IGRhdGEuaGV4OiAweDY4NjU2QzZDNkYKCiZndDsgaW5mbwotJmd0OyBjb2RlOiBPSwotJmd0OyBkYXRhOiB7JnF1b3Q7c2l6ZSZxdW90OzowfQotJmd0OyBkYXRhLmhleDogMHg3QjIyNzM2OTdBNjUyMjNBMzA3RAoKJmd0OyBmaW5hbGl6ZV9ibG9jayAmcXVvdDthYmMmcXVvdDsKLSZndDsgY29kZTogT0sKLSZndDsgY29kZTogT0sKLSZndDsgZGF0YS5oZXg6IDB4MDIwMDAwMDAwMDAwMDAwMAoKJmd0OyBjb21taXQKLSZndDsgY29kZTogT0sKCiZndDsgaW5mbwotJmd0OyBjb2RlOiBPSwotJmd0OyBkYXRhOiB7JnF1b3Q7c2l6ZSZxdW90OzoxfQotJmd0OyBkYXRhLmhleDogMHg3QjIyNzM2OTdBNjUyMjNBMzE3RAoKJmd0OyBxdWVyeSAmcXVvdDthYmMmcXVvdDsKLSZndDsgY29kZTogT0sKLSZndDsgbG9nOiBleGlzdHMKLSZndDsgaGVpZ2h0OiAxCi0mZ3Q7IGtleTogYWJjCi0mZ3Q7IGtleS5oZXg6IDYxNjI2MwotJmd0OyB2YWx1ZTogYWJjCi0mZ3Q7IHZhbHVlLmhleDogNjE2MjYzCgomZ3Q7IGZpbmFsaXplX2Jsb2NrICZxdW90O2RlZj14eXomcXVvdDsgJnF1b3Q7Z2hpPTEyMyZxdW90OwotJmd0OyBjb2RlOiBPSwotJmd0OyBjb2RlOiBPSwotJmd0OyBjb2RlOiBPSwotJmd0OyBkYXRhLmhleDogMHgwNjAwMDAwMDAwMDAwMDAwCgomZ3Q7IGNvbW1pdAotJmd0OyBjb2RlOiBPSwoKJmd0OyBxdWVyeSAmcXVvdDtkZWYmcXVvdDsKLSZndDsgY29kZTogT0sKLSZndDsgbG9nOiBleGlzdHMKLSZndDsgaGVpZ2h0OiAyCi0mZ3Q7IGtleTogZGVmCi0mZ3Q7IGtleS5oZXg6IDY0NjU2NgotJmd0OyB2YWx1ZTogeHl6Ci0mZ3Q7IHZhbHVlLmhleDogNzg3OTdBCg=="}}),e._v(" "),n("p",[e._v("Note that if we do "),n("code",[e._v('finalize_block "abc" ...')]),e._v(" it will store "),n("code",[e._v("(abc, abc)")]),e._v(", but if\nwe do "),n("code",[e._v('finalize_block "abc=efg" ...')]),e._v(" it will store "),n("code",[e._v("(abc, efg)")]),e._v(".")]),e._v(" "),n("p",[e._v("Similarly, you could put the commands in a file and run\n"),n("code",[e._v("abci-cli --verbose batch < myfile")]),e._v(".")]),e._v(" "),n("h2",{attrs:{id:"bounties"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#bounties"}},[e._v("#")]),e._v(" Bounties")]),e._v(" "),n("p",[e._v("Want to write an app in your favorite language?! We'd be happy\nto add you to our "),n("a",{attrs:{href:"https://github.com/tendermint/awesome#ecosystem",target:"_blank",rel:"noopener noreferrer"}},[e._v("ecosystem"),n("OutboundLink")],1),e._v("!\nSee "),n("a",{attrs:{href:"https://github.com/interchainio/funding",target:"_blank",rel:"noopener noreferrer"}},[e._v("funding"),n("OutboundLink")],1),e._v(" opportunities from the\n"),n("a",{attrs:{href:"https://interchain.io/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Interchain Foundation"),n("OutboundLink")],1),e._v(" for implementations in new languages and more.")]),e._v(" "),n("p",[e._v("The "),n("code",[e._v("abci-cli")]),e._v(" is designed strictly for testing and debugging. In a real\ndeployment, the role of sending messages is taken by Tendermint, which\nconnects to the app using three separate connections, each with its own\npattern of messages.")]),e._v(" "),n("p",[e._v("For examples of running an ABCI app with\nTendermint, see the "),n("RouterLink",{attrs:{to:"/app-dev/getting-started.html"}},[e._v("getting started guide")]),e._v(".\nNext is the ABCI specification.")],1)],1)}),[],!1,null,null,null);t.default=o.exports}}]);