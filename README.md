# JGSimple - JoomGap Simple API for Joomla! CMS

Bare bones API to connect a JoomGap starter with Joomla!.

JGSimple is the simplest AngularJS module to connect with a web resource, powered by Joomla! CMS.

Once the module is instantiated and loaded, it offers a promise to connect with an entry point. 

## Sample call

	q = JgSimpleResource.get(url, params).$promise;

	q.then(function(response) {
		if ( (response) && (response.success) ) {
			console.log(response.data);
		}
	});

## A working project: JED Starter

To check how it works in a real mobile app, please, visit the [JED Starter](http://www.joomgap.com/docs/).

### Sample call to JED's "Install from Web" API

    function query(params) {
      var waitForData = $q.defer();
      var url, q;

      url = 'http://appscdn.joomla.org/webapps/index.php?format=json&option=com_apps&view=dashboard&product=Sm9vbWxhIQ==&release=My40&dev_level=NA==&list=grid&pv=MS4wLjU=';
      q = JgSimpleResource.get(url, params).$promise;

      q.then(function (response) {

        if ((response) && (response.success)) {
          waitForData.resolve(parseResponseCategories(response.data.html));
        } else {
          // No data, just return
          waitForData.resolve([]);
        }

      }).catch(function () {
        // No data, just return
        waitForData.resolve([]);
      });

      return waitForData.promise;
    };
    
### JSONP Development mode vs JSON Production mode 

* In development mode (desktop setup), API Urls are called via [JSONP technique](https://en.wikipedia.org/wiki/JSONP). Additionally, a new parameter has been added to configure the resource parameters.

> JSONP (or JSON with Padding) is a technique used by web developers to overcome the cross-domain restrictions imposed by browsers to allow data to be retrieved from systems other than the one the page was served by.
>
> -- <cite>Wikipedia</cite>

* In production mode, when there are no CORS restrictions, API Urls are called via POST call and regular a JSON protocol.

## License

The code is available under the [GNU GENERAL PUBLIC LICENSE Version 3](LICENSE).

## Feedback

We welcome feedback! Leave a comment by clicking the icon in upper right corner of the banner.

* [We are always open for a quick chat!](http://www.joomgap.com/more/contact-us.html)
* [Facebook](https://twitter.com/joomgap)
* [Twitter](https://www.facebook.com/joomgap)
* [RSS](http://www.joomgap.com/more/blog.feed?type=rss)
* Post issues and pull requests on JoomGap github repositories.
