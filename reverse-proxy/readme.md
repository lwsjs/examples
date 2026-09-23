For example, a server which redirects incoming traffic to various child servers depending on request host, or some other variable.

$ws --rewrite '/section1/(.*) -> http://127.0.0.1:8010/$1' --rewrite '/section2/(.*) -> http://127.0.0.1:8020/$1'

TODO: An example based on request's host header.
