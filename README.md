# Azure OCR API Wrapper

## Description
This project wraps Azure's OCR API to provide an endpoint for extracting text from images. Users can send an image URL, and the API will return the text extracted using Azure's Optical Character Recognition (OCR) services.

## Endpoints
- `GET /`: Health check endpoint to ensure the server is running.
- `POST /ocr`: Accepts an image URL in JSON format and retrieves the extracted text.

## Example Request
### **Endpoint**
```plaintext
POST http://209.38.65.50:i3000/ocr

Request Headers

{
    "Content-Type": "application/json"
}

Request Body

{
    "imageUrl": "https://www.slidecow.com/wp-content/uploads/2018/04/Setting-Up-The-Slide-Text-1000x563.jpg"
}

Response

The response will contain the text extracted from the image:

{
    "text": {
        "regions": [
            {
                "lines": [
                    {
                        "words": [
                            { "text": "SMILE" }
                        ]
                    }
                ]
            }
        ]
    }
}
