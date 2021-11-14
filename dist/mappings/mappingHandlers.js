"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleEvent = void 0;
const types_1 = require("../types");
async function handleEvent(event) {
    const { event: { data: [account, balance] } } = event;
    //Create a new Account entity with ID using block hash
    let record = new types_1.Account(event.extrinsic.block.block.header.hash.toString());
    // Assign the Polkadot address to the account field
    record.account = account.toString();
    // Assign the balance to the balance field "type cast as Balance"
    record.balance = balance.toBigInt();
    await record.save();
}
exports.handleEvent = handleEvent;
