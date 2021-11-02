// 编辑试题
<template>
    <el-dialog
        key="editQuvisible"
        center
        :visible="editQuvisible"
        title="编辑题目"
        :width="width"
        :destroy-on-close="true"
        :append-to-body="true"
        @close="cancelFun"
        :close-on-click-modal="false"
       
    >   

        <ChoiceForm  :formData="dataForm" :handlecancelFun="cancelFun" v-if="dataForm.type==='选择题'" />
           
        <CompletionForm :formData="dataForm" :handlecancelFun="cancelFun" v-else-if="dataForm.type==='填空题'"  />

        <JudgmentForm :formData="dataForm" :handlecancelFun="cancelFun" v-else-if="dataForm.type==='判断题'" />
        <ShortanswerForm :formData="dataForm" :handlecancelFun="cancelFun"  v-else   />
    
    </el-dialog>
</template>

<script>
import ChoiceForm from 'teaComponents/formClub/choiceForm.vue';
import CompletionForm from 'teaComponents/formClub/completionForm.vue';
import JudgmentForm from 'teaComponents/formClub/judgmentForm.vue';
import ShortanswerForm from 'teaComponents/formClub/shortanswerForm.vue';

export default {
    name: 'EditQuestionDialog',
    computed:{
      width: function() {
            return document.documentElement.clientWidth >= 768
                ? '600px'
                : '100%';
        },
   
    },
    props: {
        editQuvisible: Boolean,
        cancelFun: Function,
        dataForm: Object,
    },
    data() {
        return {};
    },
    methods: {

    },
    created(){
 console.log("---created",this.editQuvisible)
    },
    mounted() {
       console.log("---",this.editQuvisible)
    },
    components: {
        ChoiceForm,
        CompletionForm,
        JudgmentForm,
        ShortanswerForm,
    },

};
</script>

