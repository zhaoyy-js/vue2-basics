<template>
  <el-form
    :model="ruleForm"
    status-icon
    :rules="rules"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
  >
    <el-row>
      <el-col :span="17">
        <el-form-item label="用户名" prop="name">
          <el-input
            placeholder="请输入用户名"
            type="text"
            v-model="ruleForm.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-col>

      <el-col :span="17">
        <el-form-item label="密码" prop="pass">
          <el-input
            placeholder="请输入密码"
            type="password"
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-col>

      <el-col :span="24" :push="4">
        <el-button
          style="width: 120px"
          type="primary"
          @click="resetForm('ruleForm')"
        >
          重置
        </el-button>

        <el-button
          style="width: 120px"
          type="primary"
          @click="submitForm('ruleForm')"
        >
          登录
        </el-button>
      </el-col>
    </el-row>
  </el-form>
</template>
<script>
export default {
  data() {
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        name: "",
        pass: "",
      },
      rules: {
        name: [{ validator: validatePass2, trigger: "blur" }],
        pass: [{ validator: validatePass, trigger: "blur" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      const { pass } = this.ruleForm;
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (pass !== "121") {
            this.$message("密码是：121");
            return;
          }
          this.$router.push({
            name: "home",
          });
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
