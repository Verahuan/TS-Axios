export type Method="get"|"GET"
|"delete"|"DELETE"
|"put"|"PUT"
|"head"|"HEAD"
|"post"|"POST"
|"options"|"OPTIONS"
|"patch"|"PATCH"

// 自定义类型
export interface AxiosRequestConfig {
  url:string
  method?:Method
  data?:any
  params?:any
}
// 使用注意：可能存在的属性名后加一个？
// 每个属性之间不加任何符号 直接换行

// 必须包含一个`url`属性且类型为`string`
// 传入定义之外的属性会报错
