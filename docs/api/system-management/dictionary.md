# 业务字典与字典类别
## 注意事项
:::tip
    该模块查询类接口，category为条件必传值（0:业务字典，1:业务字典分类）
:::

## 分页查询
:::tip
    根据条件，分页查询业务字典或业务字典分类
    POST /system/dictionary/query-page
### Request
    {
        page: Number,
        pageSize: Number,
        filters: [{field: 'category', value: [0|1]},{field: String, value: String},...],
        sorts: [{field: String, Value: ['desc'|'esc']},...]
    }
### Response
    {
        code: Number,
        message: String,
        data: {
            total: Number,
            page: Number,
            pageSize: Number,
            list: []
        }
    }
:::

## 查询全部
:::tip
    根据条件，查询业务字典或业务字典分类（不分页）
    POST /system/dictionary/query-all
### Request
    {
        filters: [{field: 'category', value: [0|1]},{field: String, value: String},...],
        sorts: [{field: String, value: ['desc'|'esc']},...]
    }
### Response
    {
        code: Number,
        message: String,
        data: [] //返回业务字典或业务字典分类信息数组
    }
:::

## 增加业务字典分类或字典
:::tip
    增加新的业务字典分类或字典，并完整返回该业务字典分类或字典信息
    POST /system/dictionary/add
### Request
    {
        parentId: [String|null],
        state: 1,
        category: [0|1],
        type: [String|null],
        name: String,
        code: String,
        index: String,
        remark: String
    }
### Response
    {
        code: Number,
        message: String,
        data: Dictionary // 返回新增的业务字典分类或字典信息
    }
:::

## 编辑业务字典分类或字典
:::tip
    编辑业务字典分类或字典信息，后端告知前端结果即可
    POST /system/dictionary/edit
### Request
    {
        id: String,
        parentId: [String|null],
        state: [0|1],
        type: String,
        name: String,
        code: String,
        index: String,
        remark: String
    }
### Response
    {
        code: Number,
        message: String
    }
:::

## 删除业务字典分类或字典
:::tip
    删除业务字典分类或字典，后端告知前端结果即可
    GET /system/dictionary/del
### Request
    {
        id: String
    }
### Response
    {
        code: Number,
        message: String
    }
:::