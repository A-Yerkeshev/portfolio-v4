import ENV, {ENVS} from "./env.js"

type Parser = {
  parse: Function;
}
type NodeParser = {
  parse: Function;
}

let nodeParser: NodeParser
let domParser: DOMParser;
switch (ENV) {
  case ENVS.Node:
    nodeParser = await import('node-html-parser');
    break;
  case ENVS.Browser:
    domParser = new DOMParser();
    break;
}

export default function HTMLParser(this: Parser) {
  this.parse = (text: string) => {
    switch (ENV) {
      case ENVS.Node:
        return nodeParser.parse(text);
      case ENVS.Browser:
        return domParser.parseFromString(text, "text/html");
    }
  }
}

