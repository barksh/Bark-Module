/**
 * @author WMXPY
 * @namespace Module
 * @description Module
 */

import { BarkIO } from "@barksh/io";
import { BarkPlatform } from "@barksh/platform";
import { Sandbox } from "@sudoo/marked";

export abstract class BarkModule {

    protected readonly platform: BarkPlatform;
    protected readonly io: BarkIO;

    protected constructor(platform: BarkPlatform, io: BarkIO) {

        this.platform = platform;
        this.io = io;
    }

    public abstract load(): void | Promise<void>;
    public abstract register(sandbox: Sandbox): void | Promise<void>;
}
