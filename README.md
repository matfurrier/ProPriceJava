# ProPrice
Your one-stop Google Cloud Platform-Powered shopping tool to make sure you always get value for your money!

## Tech Stack

* Front-End : Swift for native IOS
* Back-End : Java Spring Boot main service (src), along with a Node JS microservice for Amazon/Walmart web-scraping information. Both exposed as a RESTFul API. 
* Ad-hoc tools: Python (Puppytier and Selenium) for web scraping, hosted with Flask and Firebase Cloud.
* Persistence & DevOps : MongoDB, Heroku, ngrox
* Moral Support : Coffee

-- Swagger API Documentation : [Available here!](https://proprice.herokuapp.com/swagger-ui.html)

## APIS Used

**Google Cloud Platform (GCP) Vision Product Search** offers pre-trained machine learning models through REST and RPC APIs. It assign labels to images and quickly classify them into millions of predefined categories. For ProPrice, the Product Search API is specifically *trained* to detect objects from within our catalogue and identifies their similarities. 

Vision API Demo with Converse 
![GIF of API Web Entities and JSON](https://github.com/preyansh98/ProPrice/blob/README-files-update/GCP%20Vision%20API%20Demo.gif?raw=true)

### **Google Maps Platform (GMP) Places API**
We used GMP Places API to identify nearest stores from the user that has their desired product in stock at the lowest price! 

### **Product Price Search** 

We used the ***Best Buy Keyword Search API*** which offers developers access to retail data, including prices, offers, and sales by searching across several common attributes, such as item name and brand name. 

We couldn't get approved API Keys for other stores in time, so we decided to develop our own web-scraping microservice module which we would query for ***Amazon*** and ***Walmart***. Overall, with these three APIs provided by large commerce companies, a price match can be made and links to the online sites are provided to the user. 

## What's Next

* Train our model to pick up more products!
* Add Apple Pay Integration for store product purchases

## Links

* [GCP Vision Product Search](https://cloud.google.com/vision/product-search/docs/) - Main search API that allowed for photo recognition through reverse photo search 
* [GMP Places](https://developers.google.com/places/web-service/search) - Location/Map Services
* [Best Buy Search Function](https://bestbuyapis.github.io/api-documentation/#keyword-search-function) - Keyword Search
