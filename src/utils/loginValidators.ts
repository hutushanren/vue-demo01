import { ref, reactive } from 'vue'

// 登录表单
export const loginUser = reactive({
    username: '',
    password: ''
})

// 校验规则
export const rules = reactive({
    username: [
        {require: true, message: '账号不能为空', trigger: 'blur'}
    ],
    password: [
        {require: true, message: '密码不得为空', trigger: 'blur'},
        {min: 6, max: 30, message: '密码长度必须在6-30之间', trigger: 'blur'}
    ]
})
