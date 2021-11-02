const Mock = require('mockjs');
const Random = Mock.Random;
// 模拟19软件3班87122课前测的统计数据

// 某个教师发布的某份试卷所给的班级
const testClasses = (options) => {
  const { tid, pid } = options;
  return {
    data: ["19软件3班", "19软件2班"]
  }
}
const census = () => {

  let data = [];
  for (let i = 0; i < 10; i++) {
    data.push(Mock.mock({
      sid:Random.id(),
      name: Random.cname(),
      class: '19软件3',
      testId: 87122,
      "number|1-10": 7,
    }))
  }
  let data1 = [];
  for (let i = 0; i < 10; i++) {
    data1.push(Mock.mock({
      sid:Random.id(),
      name: Random.cname(),
      class: '19软件2',
      testId: 87123,
      "number|1-10": 7,
    }))
  }
 
  return data.concat(data1);

}
module.exports = {
  census,
  testClasses
}