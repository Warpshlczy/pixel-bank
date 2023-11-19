<template>
  <div class="d-flex" style="justify-content: center; width: 100%">
    <div class="outer">
      <div class="base">
        <div class="display-zone">
          <input type="text" id="input" />
        </div>
        <div class="operation-zone">
          <button
            v-for="btn in btnNameList"
            :key="btn"
            class="btn"
            @click="oper(btn)"
          >
            {{ btn }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      panel: null,
      btnNameList: [
        "C",
        "B",
        "/",
        "*",
        "ans",
        "7",
        "8",
        "9",
        "-",
        "%",
        "4",
        "5",
        "6",
        "+",
        "√",
        "1",
        "2",
        "3",
        "log",
        "=",
        ".",
        "0",
        "^",
        "sin",
        "cos",
      ],
      baseURL: "http://127.0.0.1:8081",
    };
  },
  methods: {
    calc(value) {
      //定义运算符数组
      let operators = [];
      //使用正则表达式匹配基本运算符号，即加减乘除幂，并将计算数存入数组
      let nums = value.split(/[+\-*/^%]/);
      for (let i = 0; i < value.length; i++) {
        if (
          value[i] == "+" ||
          value[i] == "-" ||
          value[i] == "*" ||
          value[i] == "/" ||
          value[i] == "^" ||
          value[i] == "%"
        ) {
          if (
            i != 0 &&
            i != value.length - 1 &&
            value[i + 1] != "+" &&
            value[i + 1] != "-" &&
            value[i + 1] != "*" &&
            value[i + 1] != "/" &&
            value[i + 1] != "^" &&
            value[i + 1] != "%"
          ) {
            operators.push(value[i]);
          } else if (i == 0 && (value[i] == "+" || value[i] == "-")) {
            nums[0] = "0";
            //对出现在第一位的运算符号判断合理性
            operators.push(value[i]);
          }
          //若不满足匹配条件，则返回error
          else {
            return "error";
          }
        }
      }
      //根据数组和运算符号进行运算，先乘除幂余，后加减
      for (let i = 0; i < operators.length; i++) {
        if (
          this.numSwitch(nums[i]) != "error" &&
          this.numSwitch(nums[i + 1]) != "error"
        ) {
          if (operators[i] == "*") {
            let product = this.numSwitch(nums[i]) * this.numSwitch(nums[i + 1]);
            nums[i] = "" + product;
            nums.splice(i + 1, 1);
            operators.splice(i, 1);
            i = -1;
          } else if (operators[i] == "/") {
            if (this.numSwitch(nums[i + 1]) != 0) {
              let division =
                this.numSwitch(nums[i]) / this.numSwitch(nums[i + 1]);
              nums[i] = "" + division;
              nums.splice(i + 1, 1);
              operators.splice(i, 1);
              i = -1;
            } else {
              return "error";
            }
          } else if (operators[i] == "^") {
            let power = Math.pow(
              this.numSwitch(nums[i]),
              this.numSwitch(nums[i + 1])
            );
            nums[i] = "" + power;
            nums.splice(i + 1, 1);
            operators.splice(i, 1);
            i = -1;
          } else if (operators[i] == "%") {
            if (this.numSwitch(nums[i + 1]) != 0) {
              let remain =
                this.numSwitch(nums[i]) % this.numSwitch(nums[i + 1]);
              nums[i] = "" + remain;
              nums.splice(i + 1, 1);
              operators.splice(i, 1);
              i = -1;
            } else {
              return "error";
            }
          }
        } else {
          return "error";
        }
      }

      for (let i = 0; i < operators.length; i++) {
        if (operators[i] == "+") {
          let addition = this.numSwitch(nums[i]) + this.numSwitch(nums[i + 1]);
          nums[i] = "" + addition;
          nums.splice(i + 1, 1);
          operators.splice(i, 1);
          i = -1;
        } else if (operators[i] == "-") {
          let substraction =
            this.numSwitch(nums[i]) - this.numSwitch(nums[i + 1]);
          nums[i] = "" + substraction;
          nums.splice(i + 1, 1);
          operators.splice(i, 1);
          i = -1;
        }
      }
      if (operators[0] == null) {
        return this.numSwitch(nums[0]);
      } else return "error";
    },

    //3.adjustBtn() 调整按钮的数量布局和大小

    //4.initButton() 初始化按钮
    // initButton(btnNum) {
    //   for (let i = 0; i < btnNum; i++) {
    //     let btn = document.createElement("button");
    //     this.panel.appendChild(btn);
    //     btn.setAttribute("class", "btn");
    //     //设置DOM元素属性并转化为实际html元素渲染
    //     btn.setAttribute("id", this.btnNameList[i]);
    //     let id = btn.getAttribute("id");
    //     btn.setAttribute("value", id);
    //     btn.innerHTML = id;

    //     this.adjustBtn(btn);
    //   }
    // },
    //5.oper() 按钮绑定事件
    oper(value) {
      let inputZone = document.getElementById("input");
      let input = inputZone.value;

      if (value == "=") {
        const xhr = new XMLHttpRequest();

        //2.配饰请求方法，设置POST请求接口地址
        xhr.open("post", this.baseURL + "/api/addStorage");
        xhr.setRequestHeader("Content-Type", "text/plain");
        //3.发送请求
        xhr.send(input);

        //4.网络请求返回的数据
        // xhr.readystate===4代表响应完成了，xhr.status === 200 代表请求成功
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
            alert("ok");
          }
        };
        inputZone.value = this.calc(input);
      } else if (value == "B") {
        let newVal = input.substring(0, input.length - 1);
        // document.getElementById("input").setAttribute("value", newVal);
        inputZone.value = newVal;
      } else if (value == "C") {
        // document.getElementById("input").setAttribute("value", "");
        inputZone.value = "";
      } else if (value == "ans") {
        // document.getElementById("input").setAttribute("value", "");
        //1.创建请求对象
        const xhr = new XMLHttpRequest();

        //2.配饰请求方法，设置GET请求接口地址

        xhr.open("get", this.baseURL + "/api/storage");

        //3.发送请求
        xhr.send();

        //4.网络请求返回的数据
        // xhr.readystate===4代表响应完成了，xhr.status === 200 代表请求成功
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4 && xhr.status === 200) {
            var res = xhr.responseText;
            inputZone.value = res;
          }
        };
      } else {
        let newVal = input + value;
        inputZone.value = newVal;
      }
    },
    //6.numSwitch() 对分离的操作数内部进行特殊计算
    numSwitch(num) {
      let result = 1;
      let regMatchSpecial = /sin|cos|√|log/;
      let nums = num.split(regMatchSpecial);
      let operators = num.match(regMatchSpecial);
      if (nums[0] != "") {
        result *= parseFloat(nums[0]);
      }
      for (let i = 1; i < nums.length; i++) {
        if (
          nums[i] == "" ||
          nums[i].split(".").length == 3 ||
          nums[i].split(".")[0] == ""
        ) {
          return "error";
        }
        switch (operators[i - 1]) {
          case "sin":
            result *= Math.sin((parseFloat(nums[i]) * Math.PI) / 180);
            break;
          case "cos":
            result *= Math.cos((parseFloat(nums[i]) * Math.PI) / 180);
            break;
          case "√": {
            result *= Math.sqrt(parseFloat(nums[i]));
            break;
          }
          case "log": {
            result *= Math.log(parseFloat(nums[i]));
            break;
          }
          default:
            return "error";
        }
      }
      return result;
    },
  },
  mounted() {
    this.panel = document.getElementsByClassName("operation-zone")[0];
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

/* 动画，控制背景 background-position */

.outer {
  margin-top: 5vh;
  height: 80vh;
  width: 45vw;
  background-image: url(@/assets/img/pikachu.jpeg);
  background-repeat: no-repeat;
  background-size: cover;
  border: 6px solid yellow;
  border-radius: 20px;
  padding: 1.2rem;
  display: flex;
  justify-content: center;
  opacity: 60%;
}

.base {
  height: 100%;
  width: 75%;
}

.display-zone {
  height: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
}

#input {
  height: 26%;
  width: 100%;
  font-size: 1.5rem;
  background-color: bisque;
  color: orange;
  font-weight: bolder;
  padding: 0% 1%;
}

.operation-zone {
  height: 70%;
}

.btn {
  width: 13%;
  margin: 1.5% 3.5%;
  font-size: 1.2rem;
  background-color: bisque;
  border-radius: 1.2rem;
  height: 50px;
}

.btn:hover {
  background-color: chocolate;
}
</style>