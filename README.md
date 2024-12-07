# Azure OCR API Wrapper

## Description
This project wraps Azure's OCR API to provide an endpoint for extracting text from images. Users can send an image URL, and the API will return the text extracted using Azure's Optical Character Recognition (OCR) services.

## Endpoints
- `GET /`: Health check endpoint to ensure the server is running.
- `POST /ocr`: Accepts an image URL in JSON format and retrieves the extracted text.

## Example Request

### **Endpoint**
```plaintext
POST http://209.38.65.50:3000/ocr
Request Headers:

{
    "Content-Type": "application/json"
}

Request Body:

{
    "imageUrl": "https://www.slidecow.com/wp-content/uploads/2018/04/Setting-Up-The-Slide-Text-1000x563.jpg"
}

Response: The response will contain the text extracted from the image:

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

## Swagger Documentation
The API documentation is available through the Swagger file located at the following path:

https://github.com/sricharanmurukutla/ITIS6177-FinalProject1/blob/main/Docs/swagger.json

To view the Swagger documentation, you can use tools like Swagger UI to load the swagger.json file or view it in any compatible Swagger editor.

Swagger File Details:
Version: 1.0.0
Title: Azure OCR API Wrapper
Description: An API to extract text from images using Azure's OCR service.
Host: 209.38.65.50:3000
Base Path: /
Paths:
GET /: Health check endpoint.
POST /ocr: Endpoint for text extraction from images.