let str = `
010-1234-5678
tkoyuhjkl123@naver.com
https://www.
The quick the brown fox jumps over the lazy dog.
abbcccdddd
http://locahost:1234
동해물과_백두산이 마르고 닳도록
`

// const regexp = new RegExp('the','gi') // 옵션 g는 플래그라고 불려짐. 생성자 방식
// const regexp = /the/gi //정규표현식의 리터럴 방식

// const regexp = /fox/gi
// // console.log(regexp.test(str))
// // console.log(str.replace(regexp, 'AAA')) //원본 데이터는 손상되지 않음
// str = str.replace(regexp, 'AAA') // 원본 수정(재할당)
// console.log(str)

// const regexp = /the/gi
// console.log(str.match(regexp))

// console.log(str.match(/the/gi)) // 리터럴 방식

// console.log(str.match(/\.$/gim)) // m은 각 줄의 시작과 끝을 봐야 한다.


// console.log(str.match(/https?/g))

// console.log(str.match(/\b\w{2,3}\b/g))

// console.log(str.match(/[가-힣]{1,}/g))

// const h = `  the hello  wworld  !

// `

// console.log(h.replace(/\s/g, ''))

// console.log(str.match(/.{1,}(?=@)/g))
// console.log(str.match(/(?<=@).{1,}/g))