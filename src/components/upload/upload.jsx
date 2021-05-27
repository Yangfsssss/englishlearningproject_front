import React from 'react'
import axios from 'axios'

const Upload = () => {
	let file = ''
	let fileName = ''

	function submit() {
		let data = new FormData()
		data.append('imgName', fileName)
		data.append('img', file)

		axios({
			method: 'post',
			timeout: 2000,
			url: 'http://localhost:3001/api/fileUpload',
			data: data,
		})
			.then((response) => {
				console.log(response.data)
			})
			.catch((error) => {
				console.log(error)
			})
	}

	function changeImg(e) {
		file = e.target.files.item(0)
		// 如果不选择图片
		if (file === null) {
			return
		}
		fileName = file.name
	}

	return (
		<div>
			<input type='file' name='file' accept='image/*' onChange={changeImg} />
			<button type='submit' onClick={submit}>
				上传
			</button>
		</div>
	)
}

export default Upload
