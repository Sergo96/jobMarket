// class Observable {
//     constructor() {
//         this.observers = [];
//     }

//     subscribe(func) {
//         this.observers.push(func);
//     }

//     unsubscribe(func) {
//         this.observers = this.observers.filter(observer => observer !== func);
//     }

//     notify(data) {
//         this.observers.forEach(observer => observer(data));
//     }
// }

// const observer = new Observable();

// function search(nums: number[], target: number): number {
//     const len = nums.length;
//     let end = len - 1;
//     let start = 0;

//     while (start <= end) {
//         const mid = Math.floor((start + end) / 2);

//         if (nums[mid] === target) return mid;

//         if (target < nums[mid]) {
//             end = mid - 1;
//         } else {
//             start = mid + 1;
//         }
//     }

//     return -1;
// }
