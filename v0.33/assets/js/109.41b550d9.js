(window.webpackJsonp=window.webpackJsonp||[]).push([[109],{763:function(e,t,n){"use strict";n.r(t);var i=n(1),a=Object(i.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("h1",{attrs:{id:"adr-45-abci-evidence-handling"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#adr-45-abci-evidence-handling"}},[e._v("#")]),e._v(" ADR 45 - ABCI Evidence Handling")]),e._v(" "),n("h2",{attrs:{id:"changelog"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),n("ul",[n("li",[e._v("21-09-2019: Initial draft")])]),e._v(" "),n("h2",{attrs:{id:"context"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#context"}},[e._v("#")]),e._v(" Context")]),e._v(" "),n("p",[e._v("Evidence is a distinct component in a Tendermint block and has it's own reactor\nfor high priority gossipping. Currently, Tendermint supports only a single form of evidence, an explicit\nequivocation, where a validator signs conflicting blocks at the same\nheight/round. It is detected in real-time in the consensus reactor, and gossiped\nthrough the evidence reactor. Evidence can also be submitted through the RPC.")]),e._v(" "),n("p",[e._v("Currently, Tendermint does not gracefully handle a fork on the main chain.\nIf a fork is detected, the node panics. At this point manual intervention and\nsocial consensus are required to reconfigure. We'd like to do something more\ngraceful here, but that's for another day.")]),e._v(" "),n("p",[e._v("It's possible to fool lite clients without there being a fork on the\nmain chain - so called Fork-Lite. See the\n"),n("a",{attrs:{href:"https://docs.tendermint.com/master/spec/consensus/fork-accountability.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("fork accountability"),n("OutboundLink")],1),e._v("\ndocument for more details. For a sequential lite client, this can happen via\nequivocation or amnesia attacks. For a skipping lite client this can also happen\nvia lunatic validator attacks. There must be some way for applications to punish\nall forms of misbehaviour.")]),e._v(" "),n("p",[e._v("The essential question is whether Tendermint should manage the evidence\nverification, or whether it should treat evidence more like a transaction (ie.\narbitrary bytes) and let the application handle it (including all the signature\nchecking).")]),e._v(" "),n("p",[e._v("Currently, evidence verification is handled by Tendermint. Once committed,\n"),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/master/abci/types/types.proto#L321",target:"_blank",rel:"noopener noreferrer"}},[e._v("evidence is passed over\nABCI"),n("OutboundLink")],1),e._v("\nin BeginBlock in a reduced form that includes only\nthe type of evidence, its height and timestamp, the validator it's from, and the\ntotal voting power of the validator set at the height. The app trusts Tendermint\nto perform the evidence verification, as the ABCI evidence does not contain the\nsignatures and additional data for the app to verify itself.")]),e._v(" "),n("p",[e._v("Arguments in favor of leaving evidence handling in Tendermint:")]),e._v(" "),n("ol",[n("li",[n("p",[e._v("Attacks on full nodes must be detectable by full nodes in real time, ie. within the consensus reactor.\nSo at the very least, any evidence involved in something that could fool a full\nnode must be handled natively by Tendermint as there would otherwise be no way\nfor the ABCI app to detect it (ie. we don't send all votes we receive during\nconsensus to the app ... ).")])]),e._v(" "),n("li",[n("p",[e._v("Amensia attacks can not be easily detected - they require an interactive\nprotocol among all the validators to submit justification for their past\nvotes. Our best notion of "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/c67154232ca8be8f5c21dff65d154127adc4f7bb/docs/spec/consensus/fork-detection.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("how to do this\ncurrently"),n("OutboundLink")],1),e._v("\nis via a centralized\nmonitor service that is trusted for liveness to aggregate data from\ncurrent and past validators, but which produces a proof of misbehaviour (ie.\nvia amnesia) that can be verified by anyone, including the blockchain.\nValidators must submit all the votes they saw for the relevant consensus\nheight to justify their precommits. This is quite specific to the Tendermint\nprotocol and may change if the protocol is upgraded. Hence it would be awkward\nto co-ordinate this from the app.")])]),e._v(" "),n("li",[n("p",[e._v("Evidence gossipping is similar to tx gossipping, but it should be higher\npriority. Since the mempool does not support any notion of priority yet,\nevidence is gossipped through a distinct Evidence reactor. If we just treated\nevidence like any other transaction, leaving it entirely to the application,\nTendermint would have no way to know how to prioritize it, unless/until we\nsignificantly upgrade the mempool. Thus we would need to continue to treat evidence\ndistinctly and update the ABCI to either support sending Evidence through\nCheckTx/DeliverTx, or to introduce new CheckEvidence/DeliverEvidence methods.\nIn either case we'd need to make more changes to ABCI then if Tendermint\nhandled things and we just added support for another evidence type that could be included\nin BeginBlock.")])]),e._v(" "),n("li",[n("p",[e._v("All ABCI application frameworks will benefit from most of the heavy lifting\nbeing handled by Tendermint, rather than each of them needing to re-implement\nall the evidence verification logic in each language.")])])]),e._v(" "),n("p",[e._v("Arguments in favor of moving evidence handling to the application:")]),e._v(" "),n("ol",{attrs:{start:"5"}},[n("li",[n("p",[e._v("Skipping lite clients require us to track the set of all validators that were\nbonded over some period in case validators that are unbonding but still\nslashable sign invalid headers to fool lite clients. The Cosmos-SDK\nstaking/slashing modules track this, as it's used for slashing.\nTendermint does not currently track this, though it does keep track of the\nvalidator set at every height. This leans in favour of managing evidence in\nthe app to avoid redundantly managing the historical validator set data in\nTendermint")])]),e._v(" "),n("li",[n("p",[e._v("Applications supporting cross-chain validation will be required to process\nevidence from other chains. This data will come in the form of a transaction,\nbut it means the app will be required to have all the functionality to process\nevidence, even if the evidence for its own chain is handled directly by\nTendermint.")])]),e._v(" "),n("li",[n("p",[e._v("Evidence from lite clients may be large and constitute some form of DoS\nvector against full nodes. Putting it in transactions allows it to engage the application's fee\nmechanism to pay for cost of executions in the event the evidence is false.\nThis means the evidence submitter must be able to afford the fees for the\nsubmission, but of course it should be refunded if the evidence is valid.\nThat said, the burden is mostly on full nodes, which don't necessarily benefit\nfrom fees.")])])]),e._v(" "),n("h2",{attrs:{id:"decision"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#decision"}},[e._v("#")]),e._v(" Decision")]),e._v(" "),n("p",[e._v("The above mostly seems to suggest that evidence detection belongs in Tendermint.\n(5) does not impose particularly large obligations on Tendermint and (6) just\nmeans the app can use Tendermint libraries. That said, (7) is potentially\ncause for some concern, though it could still attack full nodes that weren't associated with validators\n(ie. that don't benefit from fees). This could be handled out of band, for instance by\nfull nodes offering the light client service via payment channels or via some\nother payment service. This can also be mitigated by banning client IPs if they\nsend bad data. Note the burden is on the client to actually send us a lot of\ndata in the first place.")]),e._v(" "),n("p",[e._v("A separate ADR will describe how Tendermint will handle these new forms of\nevidence, in terms of how it will engage the monitoring protocol described in\nthe "),n("a",{attrs:{href:"https://github.com/tendermint/tendermint/blob/c67154232ca8be8f5c21dff65d154127adc4f7bb/docs/spec/consensus/fork-detection.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("fork\ndetection"),n("OutboundLink")],1),e._v(" document,\nand how it will track past validators and manage DoS issues.")]),e._v(" "),n("h2",{attrs:{id:"status"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#status"}},[e._v("#")]),e._v(" Status")]),e._v(" "),n("p",[e._v("Proposed.")]),e._v(" "),n("h2",{attrs:{id:"consequences"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#consequences"}},[e._v("#")]),e._v(" Consequences")]),e._v(" "),n("h3",{attrs:{id:"positive"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#positive"}},[e._v("#")]),e._v(" Positive")]),e._v(" "),n("ul",[n("li",[e._v("No real changes to ABCI")]),e._v(" "),n("li",[e._v("Tendermint handles evidence for all apps")])]),e._v(" "),n("h3",{attrs:{id:"neutral"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#neutral"}},[e._v("#")]),e._v(" Neutral")]),e._v(" "),n("ul",[n("li",[e._v("Need to be careful about denial of service on the Tendermint RPC")])]),e._v(" "),n("h3",{attrs:{id:"negative"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#negative"}},[e._v("#")]),e._v(" Negative")]),e._v(" "),n("ul",[n("li",[e._v("Tendermint duplicates data by tracking all pubkeys that were validators during\nthe unbonding period")])])])}),[],!1,null,null,null);t.default=a.exports}}]);