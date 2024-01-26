export type Bindings = {
  USERNAME: string
  PASSWORD: string
  memo: KVNamespace
}

declare global {
  function getMiniflareBindings(): Bindings
}
