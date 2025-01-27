import * as axios from "axios";

 
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:     {
        "API-KEY": "b1775b2f-c3a5-4509-8dc9-90b5629de7c3"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return axios.get(`https://wikirip.site/index.php?route=api/getthree&page=${currentPage}&limit=${pageSize}`)
            .then(response => {
                return response.data;
            });
    },
    follow(userId) {
    //   return instance.post(`follow/${userId}`)
        return axios.get(`https://wikirip.site/index.php?route=api/addwishlist&customer_id=3&product_id=33`)   
    },
    unfollow(userId) {
        //return instance.delete(`follow/${userId}`)
        return axios.get(`https://wikirip.site/index.php?route=api/removewishlist&customer_id=3&product_id=33`)   
    
    },
    getProfile(userId) {
        console.warn('Obsolete method. Please profileAPI object.')
        return profileAPI.getProfile(userId);
    }
}

export const profileAPI = {
    getProfile(userId) {
        return axios.get(`https://wikirip.site/index.php?route=api/profile&product_id=` + userId);
    },
    getStatus(userId) {
        return instance.get(`https://wikirip.site/index.php?route=api/profile&product_id=` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, { status: status });
    },
    savePhoto(photoFile) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile) {
        return instance.put(`profile`, profile );
    }
}

export const authAPI = {
    me() {
        return instance.get(`auth/me`);
    },
    login(email, password, rememberMe = false) {
        return instance.post(`auth/login`, { email, password, rememberMe });
    },
    logout() {
        return instance.delete(`auth/login`);
    }
}


