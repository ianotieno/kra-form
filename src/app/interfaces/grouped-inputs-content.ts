import { TextContent } from "./text-content";

export interface GroupedInputsContent {
  type: string;
  name?: string;
  inputs: TextContent[];
}
