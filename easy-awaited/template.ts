// type MyAwaited<T extends Promise<unknown>> = T extends Promise<infer X>
//   ? X extends Promise<unknown>
//   ? MyAwaited<X> : X
//   : never

type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<infer U>
  ? U extends PromiseLike<any>
  ? MyAwaited<U>
  : U
  : never;


