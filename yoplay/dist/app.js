"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* IMPORTATION */
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const chalk_1 = __importDefault(require("chalk"));
chalk_1.default.blue("hello");
