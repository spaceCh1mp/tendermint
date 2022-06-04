(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{765:function(e,t,r){"use strict";r.r(t);var o=r(1),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"wal"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#wal"}},[e._v("#")]),e._v(" WAL")]),e._v(" "),r("p",[e._v("Consensus module writes every message to the WAL (write-ahead log).")]),e._v(" "),r("p",[e._v("It also issues fsync syscall through\n"),r("a",{attrs:{href:"https://golang.org/pkg/os/#File.Sync",target:"_blank",rel:"noopener noreferrer"}},[e._v("File#Sync"),r("OutboundLink")],1),e._v(" for messages signed by this\nnode (to prevent double signing).")]),e._v(" "),r("p",[e._v("Under the hood, it uses\n"),r("a",{attrs:{href:"https://godoc.org/github.com/tendermint/tmlibs/autofile#Group",target:"_blank",rel:"noopener noreferrer"}},[e._v("autofile.Group"),r("OutboundLink")],1),e._v(",\nwhich rotates files when those get too big (> 10MB).")]),e._v(" "),r("p",[e._v("The total maximum size is 1GB. We only need the latest block and the block before it,\nbut if the former is dragging on across many rounds, we want all those rounds.")]),e._v(" "),r("h2",{attrs:{id:"replay"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#replay"}},[e._v("#")]),e._v(" Replay")]),e._v(" "),r("p",[e._v("Consensus module will replay all the messages of the last height written to WAL\nbefore a crash (if such occurs).")]),e._v(" "),r("p",[e._v("The private validator may try to sign messages during replay because it runs\nsomewhat autonomously and does not know about replay process.")]),e._v(" "),r("p",[e._v("For example, if we got all the way to precommit in the WAL and then crash,\nafter we replay the proposal message, the private validator will try to sign a\nprevote. But it will fail. That's ok because we’ll see the prevote later in the\nWAL. Then it will go to precommit, and that time it will work because the\nprivate validator contains the "),r("code",[e._v("LastSignBytes")]),e._v(" and then we’ll replay the\nprecommit from the WAL.")]),e._v(" "),r("p",[e._v("Make sure to read about "),r("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/docs/tendermint-core/running-in-production.md#wal-corruption",target:"_blank",rel:"noopener noreferrer"}},[e._v("WAL corruption"),r("OutboundLink")],1),e._v("\nand recovery strategies.")])])}),[],!1,null,null,null);t.default=a.exports}}]);