import request from "../request"

const testApi = () => {
    return request.get('/api/test')
}

export {
    testApi
}