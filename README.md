# JGSimple - JoomGap Simple API for Joomla! CMS

Bare bones API to connect a JoomGap starter with Joomla!.

JGSimple is the simplest AngularJS module to connect with a web resource, powered by Joomla! CMS.

* In development mode (desktop setup), API Url is called via [JSONP technique](https://en.wikipedia.org/wiki/JSONP). Additionally, a new parameter has been added to configure the resource parameters.

> JSONP (or JSON with Padding) is a technique used by web developers to overcome the cross-domain restrictions imposed by browsers to allow data to be retrieved from systems other than the one the page was served by.
>
> -- <cite>Wikipedia</cite>

* In production mode, where there are no CORS restrictions, API Url is called via POST call.

Once the module is instantiated and loaded, it offers a promise to connect with an entry point. 

## Sample call

	q = JgSimpleResource.get(url, params).$promise;

	q.then(function(response) {
		if ( (response) && (response.success) ) {
			console.log(response.data);
		}
	});
