<template>
    <div id="touxiang">
        <el-upload
            class="avatar-uploader"
            action="/post"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
        >
            <img v-if="imageUrl" :src="imageUrl" class="avatar" />
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <span>点击更换头像</span>
    </div>
</template>

<style>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
}
.avatar-uploader .el-upload:hover {
    border-color: #409eff;
}
.avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
}
.avatar {
    width: 178px;
    height: 178px;
    display: block;
}
</style>

<script>
export default {
    name: 'AvatarUpload',
    data() {
        return {
            imageUrl:
                'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1608041214259&di=89a8d4481a9401472aadf5801f98afe8&imgtype=0&src=http%3A%2F%2Fimg.xshuma.com%2F201206%2F214115120616146706.jpg',
        }
    },
    methods: {
        handleAvatarSuccess(res) {
            // this.imageUrl = URL.createObjectURL(file.raw) // 这个是本地imgUrl,没有用的。
            // res 就是调接口的返回值
            // 假设返回内容就是这个
            console.log(res)
            res = {
                code: 1,
                data: {
                    imageUrl:
                        'https://cn.bing.com/images/search?view=detailV2&ccid=fq3C%2bDod&id=559013711BE7A05DDBD12F0F467037892E280B54&thid=OIP.fq3C-Dodg9sC0xlCNuB4IQHaLH&mediaurl=http%3a%2f%2fjy.sccnn.com%2fzb_users%2fupload%2f2017%2f01%2fremoteimage2_20170118151850_84849.jpeg&exph=1200&expw=800&q=%e5%9b%be%e7%89%87&simid=608050653849324623&ck=9DAD13CE9A96131EAFA83C9945011888&selectedIndex=0&FORM=IRPRST&ajaxhist=0',
                },
            }
            console.log(res)
            if (res.code === 1) {
                this.imageUrl = res.data.imageUrl
            }
        },
        beforeAvatarUpload(file) {
            const isJPG = file.type === 'image/png'
            const isLt2M = file.size / 1024 / 1024 < 2

            if (!isJPG) {
                this.$message.error('上传头像图片只能是 png 格式!')
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!')
            }
            return isJPG && isLt2M
        },
    },
}
</script>
