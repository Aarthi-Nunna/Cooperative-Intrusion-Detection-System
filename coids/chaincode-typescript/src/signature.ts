/*
  SPDX-License-Identifier: Apache-2.0
*/

import {Object, Property} from 'fabric-contract-api';

@Object()
export class Signature {

    @Property()
    public doctype?: string;

    @Property()
    public ID: string;

    @Property()
    public CID: string;

}

