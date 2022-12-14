import { Box, Image, Text, Link } from '@chakra-ui/react';
// import "./Module.cardInpiration.css"

function CardInpiration({ image }) {
  return (
    <>
      <style>{`	
			/*---------------*/
			/***** Zoe *****/
			/*---------------*/

			figure.effect-zoe figcaption {
				top: auto;
				bottom: 0;
				padding: 0;
				height: 0;
				background: #fff;
				color: #3c4a50;
				-webkit-transition: -webkit-transform 0.35s;
				transition: transform 0.35s;
				-webkit-transform: translate3d(0,100%,0);
				transform: translate3d(0,100%,0);
			}

			figure.effect-zoe h2 {
				float: left;
			}

			figure.effect-zoe p.icon-links a {
				float: right;
				color: #3c4a50;
				font-size: 1.4em;
			}

			figure.effect-zoe:hover p.icon-links a:hover,
			figure.effect-zoe:hover p.icon-links a:focus {
				color: #252d31;
			}

			figure.effect-zoe p.description {
				position: absolute;
				bottom: 1em;
				padding-left: 2.7em;
				padding-right: 1em;
				padding-top: 0.5em;
				padding-bottom: 0.5em;
				color: #fff;
				text-transform: none;
				font-size: 90%;
				opacity: 0;
				-webkit-backface-visibility: hidden; /* Fix for Chrome 37.0.2062.120 (Mac) */
				-webkit-transition: opacity 0.35s;
				transition: opacity 0.35s;
				-webkit-backface-visibility: hidden; /* Fix for Chrome 37.0.2062.120 (Mac) */
			}

			figure.effect-zoe h2,
			figure.effect-zoe p.icon-links a {
				-webkit-transition: -webkit-transform 0.35s;
				transition: transform 0.35s;
				-webkit-transform: translate3d(0,200%,0);
				transform: translate3d(0,200%,0);
			}

			figure.effect-zoe p.icon-links a span::before {
				display: inline-block;
				padding: 8px 10px;
				font-family: 'feathericons';
				speak: none;
				-webkit-font-smoothing: antialiased;
				-moz-osx-font-smoothing: grayscale;
			}

			.icon-eye::before {
				content: '\e000';
			}

			.icon-paper-clip::before {
				content: '\e001';
			}

			// .icon-heart::before {
			// 	content: '\e024';
			// }

			figure.effect-zoe h2 {
				display: inline-block;
			}

			figure.effect-zoe:hover p.description {
				opacity: 1;
			}

			figure.effect-zoe:hover figcaption,
			figure.effect-zoe:hover h2,
			figure.effect-zoe:hover p.icon-links a {
				-webkit-transform: translate3d(0,0,0);
				transform: translate3d(0,0,0);
			}

			figure.effect-zoe:hover h2 {
				-webkit-transition-delay: 0.05s;
				transition-delay: 0.05s;
			}

			figure.effect-zoe:hover p.icon-links a:nth-child(3) {
				-webkit-transition-delay: 0.1s;
				transition-delay: 0.1s;
			}

			figure.effect-zoe:hover p.icon-links a:nth-child(2) {
				-webkit-transition-delay: 0.15s;
				transition-delay: 0.15s;
			}

			figure.effect-zoe:hover p.icon-links a:first-child {
				-webkit-transition-delay: 0.2s;
				transition-delay: 0.2s;
			}		
		`}</style>
      <figure className="effect-zoe">
        <Image src={image} alt="Travel Inspiration" />
        <figcaption>
          {/* <p className="icon-links">
                        <Link href="#"><span className="icon-heart"></span></Link>
					</p>
					<p className="description">Zoe never had the patience of her sisters. She deliberately punched the bear in his face.</p> */}
          <Link href={'/viewDestinasi'}>
            <Text className="description" fontSize={'16px'} fontWeight="600">
              Name Destination
            </Text>
          </Link>
        </figcaption>
      </figure>
    </>
  );
}

export default CardInpiration;
