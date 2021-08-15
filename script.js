$( document ).ready(function() {
    $(function () {
        $('.bars li .bar').each(function (key, bar) {
            const percentage = $(this).data('percentage');
            $(this).animate({
                "height": percentage + '%'
            }, 1000)
        });
    })

    const allbars = [
        {
            "name": "Slack",
            "color": `#64ef${parseInt(Math.random() * 100)}`,
            "percentage": parseInt(Math.random() * 100),
            "app_logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAKuSURBVDjLdZLdS1NxGMdPRZLgPxBC0pVhWHgRXhiMdlEUQUXBLhLUMnux0gxUtBeX8yXzuCVbKS5Htunmppt7cW5OXGeerZZhObVA8DIaBtoLljr89pwjWm32gy8/Dvyez/N5Hg4DgPknvC6dwoLTjuNlWwwj6hh8qnF4m1g4FOnx7+OLy6hwCW8swKQTiLjX79dGINAOWKuX0F9elgjgdUkY63Rj3AS8twFcB+BhQV0BZy1gvwu4FMBoK+CoAbouutGRm/QHwGlVeEvFAsCnilGhlHSTNzuZy5KhL5biRVEMNoIZSwH1GXYd4G/LhP9JDOFeKmZjsNelwSFPIV0F6QZhLAmi+6oCuoIUaM+n4em5GPoqAeWxGFhpBoORVhX4LtJTC7pS2O6kwlo5h6FGwFIOmG/RXQF0yOagPp2KxyekBKExCoGmHJYh3Y8Im9Zns1Ylk24tXPUR0jXgWZ4E7TIJ6RpguB6B6mgFWo7sQsPhVfTSGPKsaYZ0lxGmLfdTN2PJ9hnOefOD3+4IhUJfeZ4Hx3Hw+/0IDvV/HnUPsKjP3kaFC+i9Ddzfv8iQ7jKCzwFDsbDdpHCIH1tZWcFWcbsHh3Hv4A7IDyyKo9VkfGdou7PoqwLpLpHuzjA38kt4rLDN/ZPBVxaUaXLXilpOoUAhWet+cEgATDPxf1YgEMAGgJv9IabOrIPcXADnlAbvPnmhHL4GmTIT2cW7mxMAwrwbgE7+i5i8h8cxEFFhYIZ+JDrNvktQ+i4LgJ8JAJ/PJwKi0ehmTlZnYXBKi7+PfVIjAJAA8Hg8ImB+fh4TExNiJKV78ch7AQ3efLG4wZP/fwOXy7UQv32NrR5nm/eB9RaKnYVb+N5yB3a7XW+1WqMWiwUmkwk9PT3Q6/W4opAt59zYsypoU75RGoX3vwEsUe6Qo5mAvAAAAABJRU5ErkJggg=="
        },
        {
            "name": "Linux",
            "color": `#563d${parseInt(Math.random() * 100)}`,
            "percentage": parseInt(Math.random() * 100),
            "app_logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAIOSURBVDjLpZM7aFRhEIW/m73r5gWB9UFEzAMsjIIIgkViFzFgJbHR0kqI2Ahi7KzsrEWwCQZsBFFIExWCqJWKClppEDTxEVCym73/a/75LW7AFIksOOXA+eacA5OllPifyTdbTt9dSVEVLxCj4kVxosxM7c3aAjivHNvfjaiiCSQmHrxstO/ABMVHZWVVCDHR11VhzWj7gJYRvCg2KBITLu+gaWRzQLp6uWxRlRSEFIRi+ArOJ2xIBFE6q5GGjf9wMH4cVMliJIuR5lvFScK4SIjQVU00toqQgpCJwOtXIAEOHWbNeGxQCl9GsNsyxIQtAM6XAGchCARh1SVcUIxTQkz01hRtKRefnEvBC94Hgg04F8jVOjpEwDoIAbxnraVYnzBe8bHs4pTc4/TMU+LyF6Rex41OcLv2jVzN+mXnwHsQQUwoHawD9n28w9jgAgfGL1AbPoh5N8+HZ48ZwdChhS2FxoC1EALaUqwvAcYre97fYmR8ks5PC2QzZ+levM/QQJ0jn7+Sp8LAxggiqFHMBgd9zSU6+4fh5KW/5V3bTb0I5FqYUjg6BjGCCMkIXhL9fVVEodGzi+LNHD0Pp3DmOwXQbFT4XcvJb9ROoLM/SU5IIZJCRHsjc7PL4JUUhZ3bJ+l/Mc/Qji7ySpXmirD4o4NH7ihZu+/8/MzAdOvX8vlKzAZjJS0luDkxL9f/ALqCe8YKiajkAAAAAElFTkSuQmCC"
        },
        {
            "name": "Solarbreeze",
            "color": `#9e6f${parseInt(Math.random() * 100)}`,
            "percentage": parseInt(Math.random() * 100),
            "app_logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALcSURBVBgZBcFNiFR1AADw338+dhl3ZmfdXbf1a4NCwUSQOiREBVJhpmRoByGQbp26FJ66d4gI6iIFJRYRdQjCSiglsDIxNEgsK61tcc3WrWbmzZs3b95Hv1/Ye+jx0zNzM7ur1SoACAAAggAIyPLC7b9vn6nNzM3sfvv1d4RKkBUjAARBqRRAPIoQlGVFWZRKuRePvrC7Vq1W5TJh9L7+F5esPR1bObpgotV09eq3fuq/aXmlo9WadGu1o1qr6/YTR/aW6rWqCkCns6qzbUw3isSnroiim6IoEoaXDAc9g7gnHUQGg0iW9IVQIKgFQLu9jnJkzfPTvHzR+MFZc+s3aIyuGWRbtKZaxqoVtfqYKE6EMERQAYJOpyOKev6by3XXZgYf/UZeKOOzRsNI3OsbDWPDpC8dxkIoQQ2g3Z6jHJlqT+o8d4+1x1ZlD683Pju0kK6qNzdbM15VH6vrxSm6BCoEkCRD/SjW6Xb0JnL/biU5cV2ZJyrpZ07+uN+X1/fpR/8o0r4AgkoANBpTmpMz2u15reY69Wd2aizWNPI7bZi5YZinNs1uc/LaAdvn31KtFAJqAdDr9EXREH3f3/jLqSsXlI+k0u9+kWaZDdNbbZu/Xy/pe+mr97z21H4BNSEImJya182Gfohjf6R1WZF6dPsReVnIi1yhtNxZsmPTA6J04NkP9tgRnlaDsiydX/rdpRs/azZbkiSRZKm8LCyu/mpUZLJiZJSPdIc9Ozc/KBrFzg7eVQuIs76VfGR8rGmi0ZYMU0mWyPLMHZMLsiKXl4WbnT9NN+ddXPrG5eUr7u0eUCMIoaJl0iDExvOGNaEpzhLHz70iLVJJlrp7drtddz3mwuLXzi+e8+rBEz4+9qlaluXyPLdxeqeNMwQQ7NryJAghgMPH7hMqDZeXL3vj8Ic2Ti3I8k+EfYee+Hzd3Oyear2GIAACAOBM67i0LD3UP2RCS5blVm6tnPofTwlmPORvTlwAAAAASUVORK5CYII="
        },
        {
            "name": "Skype",
            "color": `#b4b3${parseInt(Math.random() * 100)}`,
            "percentage": parseInt(Math.random() * 100),
            "app_logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAALASURBVDjLhZJdSFNhGMcPSMJACLr1wptAkIIuC6zFKjJDb6QurNiFaCH2gWiFNh1rLodNJ/iBS5k5RdvcSSunpTYrc+QHSHFwbmzNbWd+bE7FWFgnn/6TFrKsLh4OvLy///N7nvMyRMTsrq7xUCpK0/EuNK23BgXd66DQPLw8XW9Z0jwcCKTG34+HiwFG+mfWaGh2g4Y/bdDL2XVip1apfSxI91k+UmHki/8IAJjYOR4aZCfD9GJmnTreBqnx1RKhK9U8D5DqKY/vIrUMr1B1f4Cu6z2DV1vdib8D0FXLfgiTeXKNoCsAlEBXFOtS3uMTlXZ5JbceewRVH09lPV663OTS7ATo3wQPt2LOvukwNQwtCbWWQIr6WSAJukroTtzt9k0Ud3iVhXpPUoHOnSJtdgnyXp5y6pxCdo0jjWkZWdY+sYXo0ehKVFdSxfLJchPvrhtYokqTn8q6fSTv9VNes8t9qcGVfLHeKUEI3Wj30FmVXcNA185OhUndz5PCzIuga6odWCToGgvb3OK8FpcYusbbXV7KqXWYstQOUYZ6HsFeEis4joHulhnLgy5BNwG6kTvoCl2xzWbLtlqtadAVX2l0UabaHjldNZdwUsGRzOijYzJunYHuVvf7VSrt9Ea3K7rW9jmqu1Jn/pgO+LvFYvlWrR/NgO7CKeUcHVdwovRKbme0o+XcJoPtOpWsn6AbgW4idE9EtwvYYJ93kH3eSQaDoSN6ll7BHULXfQD951Tz0QCOwXZvQrcAi9kf+22AD6Dzptls3ga8rdPpeK1Wm7T7AQEWoy4w8U8zWoCbAAs+/yIteHkCLKhUqgd73d0LPgL4x6/O44DHAW/LZLIvJSUlB/8bAHgE8FfArbEzwAbAm0VFRew/AwCfB+wHfC/+ImB5fn7+mFQqPfPXAMBgddl7zRotwFm5ubmZqITY2U/WPMCPgs5K+QAAAABJRU5ErkJggg=="
        },
        {
            "name": "Cardify",
            "color": `#b914${parseInt(Math.random() * 100)}`,
            "percentage": parseInt(Math.random() * 100),
            "app_logo": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAAK/INwWK6QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAJeSURBVDjLpZNLSNRRFIe/O81o+WjISM0epuarEHuDqIFEDyoqEFtFD4gWQVDQoo0QhFARbowKNNpKi0DJRYVGqRmY5oPUBs3S1GnMcdR0/v8Z554WM44RGURne7nf+X6cc5SI8D9lBTh79/0VIBkoAHaCCIJCCxaLwqJAa40O4LFZpT9z/cpdaOFqcZZCRDhT0V4p/1i3HveIiAQNgEKAh83usNrfgp3Pj6NvyGOGI6AlceExPT4SAKX+/PnjNxMAr+GPCANEJGqhq8NlLtk53myk0FlN/0QO19a+Ul33Lp4OArRYF9SWqrmxWqb7WliRcwp7ynY8g5n0Pa+6vQBQACXX6zG0RgvU3djP4OhUMI7nBXZ6iEvPxz3QS4TyEbsykZjVG+0hgAbgu9fPvm1J1LWNhDtH+1qxSRf21IOYY9VERCm+dPQxPatQvolcS8gAgBkjgF+EOXM+OImpZmw/GrCnHcYYrUTZJrHFxBItbh4N5bH70hOHBUCFDEzTj9cfIGD4cfbWEjX7GvvmYxgj97HY/PimN+Fq7GTNgTKchh2AoMEvUxeBnKgOPF+bid96BJ+zimURgjmdzHhTO6qonOUJ2YjMLwL0vA4ThluqKT0UwBdIYqy7Ao3BrHsdrre9qKJyVHQCodgSBgS0/gzQ/eAExWntbCm4QORwE46aZjqeuXG87GTD8TukZmSRkmQPmcrk4iYGdE1JaUOGiOTlulyrfB+ekpJbyNT4BANtDupjLzNe9g6R1lBIPQOWXgD1+zmf3Bvn3ZGaYN2TnYLYzDde1/i5oze7Pi21YD8BVSdMJ0n4cQkAAAAASUVORK5CYII="
        }
    ];
let barsHtml = '';
let blockHtml = '';
    allbars.forEach((elem) => {
        barsHtml += `<li><div class="bar" style='background: ${elem.color};' data-percentage="${elem.percentage}"></div><span>${elem.name}</span></li>`;
        blockHtml += `<li class="chart-block"><span class="block" style="background: ${elem.color};"></span> <span><img src="${elem.app_logo}" alt="App logo"> ${elem.name}</span></li>`
    })
    document.getElementById('chart-bars').innerHTML = barsHtml;
    document.getElementById('chart-blocks').innerHTML = blockHtml;
});