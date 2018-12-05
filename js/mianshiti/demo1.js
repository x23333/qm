// const reg = /\[[0-9]+\]/gi;
// const str = "target[123123]";
// const str1 = "target[]"

// if (reg.test(str)) {
//     console.log('test success');
// }

// if (!reg.test(str1)) {
//     console.log('test fail');
// }

// const matchResult = str.match(reg);
// console.log(matchResult); // ["[123123]"]
// const obj = { selector: { to: { toutiao: "FE Coder"} }, target: [1, 2, { name: 'byted'}]};

// get(obj, 'selector.to.toutiao', 'target[0]', 'target[2].name');
// // [ 'FE Coder', 1, 'byted']
// function get(data, ...args) {
//   const reg = /\[[0-9]+\]/gi;

// 	return args.map((item) => {
// 		const paths = item.split('.');
//     let res = data;
    
// 		paths.map(path => res = res[path]);
// 		return res;
// 	})
// }

function get(data, ...args) {
	const reg = /\[[0-9]+\]/gi;
	return args.map((item) => {
		const paths = item.split('.');
		let res = data;
		paths.map((path) => {
      if (reg.test(path)) {
        const match = path.match(reg)[0];
        // 将target[0]里的target储存到cmd里
        const cmd = path.replace(match, '');
        // 获取数组索引
        const arrIndex = match.replace(/[\[\]]/gi, '');
        res = res[cmd][arrIndex];
      } else {
        res = res[path];
      }
		});
		return res;
	});
}


const obj = { selector: { to: { toutiao: "FE Coder"} }, target: [1, 2, { name: 'byted'}]};

console.log(get(obj, 'selector.to.toutiao', 'target[0]', 'target[2].name'));
