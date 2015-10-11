# JGSimple - JoomGap Simple API for Joomla! CMS

Bare bones API to connect a JoomGap starter with Joomla!.

JGSimple is the simplest AngularJS module to connect a web resource, powered by Joomla! CMS, via a [JSONP technique](https://en.wikipedia.org/wiki/JSONP).

> JSONP (or JSON with Padding) is a technique used by web developers to overcome the cross-domain restrictions imposed by browsers to allow data to be retrieved from systems other than the one the page was served by.
>
> -- <cite>Wikipedia</cite>

Once the module is instantiated and loaded, it offers a promise to connect with an entry point.

## Sample call

	q = jgSimpleApi.get(url, params).$promise;

	q.then(function(response) {
		if ( (response) && (response.success) ) {
			console.log(response.data);
		}
	});
