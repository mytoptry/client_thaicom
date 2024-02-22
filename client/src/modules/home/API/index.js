import { server } from "../../../constants"
import { httpClient } from "../../../utils/HttpClient"

const getAnnounceAllFetch = async () => {
    try {
        const result = await httpClient.get(server.GET_ANNOUNCE_ALL_URL)
        if (result.data.isSuccess) {
            return result.data.formData
        } else {
            return null
        }
    } catch (err) { // status 404
        return null
    }
}

const getPageHomeFetch = async () => {
    try {
        const result = await httpClient.get(server.GET_PAGE_HOME_URL)
        if (result.data.isSuccess) {
            return result.data.formData
        } else {
            return null
        }
    } catch (err) { // status 404
        return null
    }
}

const getAstrologyImportantFetch = async () => {
    try {
        const result = await httpClient.get(server.GET_ASTROLOGY_IMPORTANT_URL)
        if (result.data.isSuccess) {
            return result.data.formData
        } else {
            return null
        }
    } catch (err) { // status 404
        return null
    }
}

const getServiceGroupAllFetch = async () => {
    try {
        const result = await httpClient.get(server.GET_SERVICE_GROUP_ALL_URL)
        if (result.data.isSuccess) {
            return result.data.formData
        } else {
            return null
        }
    } catch (err) { // status 404
        return null
    }
}

const getUserCommentAllFetch = async () => {
    try {
        const result = await httpClient.get(server.GET_USER_COMMENT_ALL_URL)
        if (result.data.isSuccess) {
            return result.data.formData
        } else {
            return null
        }
    } catch (err) { // status 404
        return null
    }
}

const getKnowledgeSourceAllFetch = async (value) => {
    try {
        const result = await httpClient.post(server.GET_KNOWLEDGE_SOURCE_ALL_URL, { value })
        if (result.data.isSuccess) {
            return result.data.formData
        } else {
            return null
        }
    } catch (err) { // status 404
        return null
    }
}

const getBlogAllFetch = async () => {
    try {
        const result = await httpClient.get(server.GET_BLOG_ALL_URL)
        if (result.data.isSuccess) {
            return result.data.formData
        } else {
            return null
        }
    } catch (err) { // status 404
        return null
    }
}

const updatePageHomeByIdFetch = async (value) => { // Done
    try {
        const result = await httpClient.put(server.UPDATE_PAGE_HOME_BY_ID_URL, { value })
        return result.data
    } catch (err) { // status 404
        return null
    }
}

const updateAstrologyImportantByIdFetch = async (value) => { // Done
    try {
        const result = await httpClient.put(server.UPDATE_ASTROLOGY_IMPORTANT_BY_ID_URL, { value })
        return result.data
    } catch (err) { // status 404
        return null
    }
}

export {
    // get
    getAnnounceAllFetch,
    getPageHomeFetch,
    getAstrologyImportantFetch,
    getServiceGroupAllFetch,
    getUserCommentAllFetch,
    getKnowledgeSourceAllFetch,
    getBlogAllFetch,

    // insert

    // update
    updatePageHomeByIdFetch,
    updateAstrologyImportantByIdFetch

    // delete

}