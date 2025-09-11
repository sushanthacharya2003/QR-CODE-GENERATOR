# QR Code Generator

Generate QR codes easily from your browser! This project is a React-based web application that allows users to create QR codes for any text or URL, preview them instantly, and download them for use.

## Features

- **Instant QR Code Generation**: Enter any text or URL and see the QR code update in real time.
- **Download QR Codes**: Save your generated QR code as an image file.
- **Responsive Design**: Works seamlessly on desktop and mobile devices.
- **User-Friendly Interface**: Simple, clean, and intuitive UI.

## Demo

![Demo Screenshot](./project%20demo/demo%20photo.jpg)

### Video Demo

<video src="./project%20demo/demo%20video.mp4" controls width="500"></video>

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher recommended)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. **Clone the repository:**
	```bash
	git clone https://github.com/sushanthacharya2003/QR-CODE-GENERATOR.git
	cd qrcodegenerator
	```
2. **Install dependencies:**
	```bash
	npm install
	# or
	yarn install
	```
3. **Start the development server:**
	```bash
	npm start
	# or
	yarn start
	```
4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage

1. Enter the text or URL you want to encode in the input field.
2. The QR code will be generated instantly.
3. Click the download button to save the QR code as an image.

## Project Structure

```
qrcodegenerator/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   └── QrCodeCard.jsx
│   ├── App.js
│   └── ...
├── package.json
└── readme.md
```

## Dependencies

- React
- [qrcode.react](https://github.com/zpao/qrcode.react) (or similar QR code library)

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).

## Author

- [Sushanth Acharya](https://github.com/sushanthacharya2003)
