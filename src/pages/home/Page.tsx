import './style.css'
import './style.mobile.css'
import { useState } from 'react'
import { SiAdguard } from 'react-icons/si'
import { IoIosTime, IoMdGlobe } from 'react-icons/io'
import ceo1 from '/images/ceo1.webp'
import ceo2 from '/images/ceo2.webp'
import ceo3 from '/images/ceo3.webp'

// import { FaMapLocationDot } from 'react-icons/fa6'

type WhyCardProps = {
	icon: any;
	title: string;
	content: string;
}

type TestimonialProps = {
	id: number;
	name: string;
	title: string;
	testimonial: string;
}

type TestimonialItemProps = {
	id: number;
	no: number;
	name: string;
	title: string;
	testimonial: string;
}

const WhyArray: WhyCardProps[] = [
	{
		icon: <SiAdguard/>,
		title: 'Safe Packing',
		content: 'Every Package matters, every time. You can Rest easy knowing that your package is in safe hands.'
	},
	{
		icon: <IoIosTime />,
		title: 'In Time Delivery',
		content: 'Trust us to deliver your packages at the expected time of delivery.'
	},
	{
		icon: <IoMdGlobe />,
		title: 'Ship Everywhere',
		content: 'Regulations are frequently contained in global supply chains.'
	}
]

const TestimonialArray: TestimonialProps[] = [
	{
		id: 0,
		name: `Cheng xia Su`,
		title: `Ceo of Aioxe Productions`,
		testimonial: `Their competitive rates have significantly reduced my shipping costs without compromising delivery speed. In fact, our customers often comment on how quickly they receive their packages. I highly recommend Jetlog to fellow entrepreneurs seeking reliable, affordable shipping solutions.`
	},
	{
		id: 1,
		name: `Xeng Xia Reng`,
		title: `Director of Ranhge Company`,
		testimonial: `Jetlog has made international shipping a breeze. There expertise and global network ensure seamless delivery to our customers worldwide. Jetlog Provides professional, secure shipping solutions that give peace of mind and maximum assurance of delivery.`
	},
	{
		id: 2,
		name: `Huag Joax`,
		title: `Ceo of Huag Pharmaceuticals`,
		testimonial: `Thank you very much Jetlog for saving my time. With  Jetlog, the delivery of goods is faster even though it is very far away. I also don't need to be scared and doubtful because Jetlog provides a place to store my shipping documents and makes it easier with excellent real-time updates.`
	}
]

function HeroSection () {
	return (
		<div className='hero-sect'>
			<div className='hero-sect-hdr'>
				Streamline your shipping, Simplify your Life. <span className='hero-sect-highlight'>Efficient </span>Logistics solution for a <span className='hero-sect-highlight'> Hassle-Free experience. </span>
			</div>

			<div className='hero-sect-cnt'>
				Your Shipping, Our Priority: Expert care for your valuable goods with Transparency, Accountability, and Proactive Communication every step of the way.
			</div>

			<div className='hero-sect-btn'>
				<button>Contact Us</button>
				<button>Learn More</button>
			</div>

			<div className='hero-sect-img'>
				<img src='/images/ship2.webp' />
			</div>
		</div>
	)
}

function WhyCard ({ icon, title, content }: WhyCardProps) {
	return (
		<div className='why-card'>
			<div>{icon}</div>

			<div>{title}</div>

			<div>{content}</div>

		</div>
	)
}

function Why () {
	return (
		<div className='why-sect'>
			<div className='why-sect-hdr'>
				<div className='why-sect-hdr-left'>
					<span>Why Us</span>

					<div>Why Should you Trust our Service.</div>
				</div>

				<div className='why-sect-hdr-right'>
					Trust Us to deliver with our Expert Shipping services, Personalized support and unwavering commitment to your satisfaction and peace of mind.
				</div>
			</div>

			<div className='why-sect-cnt'>
				{
					WhyArray.map((item, i) => (
						<WhyCard key={'why-card ' + i} icon={item.icon} title={item.title} content={item.content}  />
					))
				}
			</div>
		</div>
	)
}

function OurServices () {
	return (
		<div className='services-sect'>
			<div className='services-sect-hdr'>
				<span>Our Services</span>
				<div> Everything is ready to transport </div>
				<div>We make logistic shipping much easier and straightforward. Combining good services and technology makes everything efficient.</div>
			</div>

			<div className='services-sect-cnt'>
				<div className='services-sect-cnt-left'>
					<div className='services-sect-cnt-left-top'>
						<div>
							<span>From</span>
							<span> San Jose </span>
						</div>

						<span>⇄</span>

						<div>
							<span>Destination</span>
							<span>Sāo Paulo</span>
						</div>
					</div>

					<div className='services-sect-cnt-left-btm'>
						<div className='services-sect-cnt-left-btm-hdr'>
							<span>SHIP-092348</span>

							<span> Janet Rompardre </span>
						</div>

						<div className='services-sect-cnt-left-btm-grid'>
							<div className='services-bold'>
								Depart from San Jose
							</div>

							<div>1924 Beech Street, San Jose California 95123 925-672-5678</div>

							<div className='services-bold'>Transit in Mexico city</div>

							<div>119 Sierra de Atica, Jalisco Mexico City, 37140 477-717-6789</div>

							<div className='services-bold'>Arrived in Sao Paulo</div>

							<div>Avenda Doutor, Sao Vicente Sao Paulo, 11346-070 (13) 3333 3333</div>

						</div>
					</div>



				</div>

				<div className='services-sect-cnt-right'>
					<div>Inline and Ocean shipping solutions</div>

					<div>
						We Provide both inland and ocean express shipping to make your company logistics delivery much faster and efficient.
					</div>

					<div className='services-sect-cnt-right-list'>
						<span> » Best in class shipping services </span>
						<span> » Wide and safe shipment routes </span>
						<span> » Intercontinental Network </span>
					</div>

					<button>Learn More</button>
				</div>
			</div>
		</div>
	)
}

function TestimonialsInfo ({ id, no, name, title, testimonial }: TestimonialItemProps) {
	return (	
		<>
			{
				no == id
				?
				<>
					<div>{testimonial}</div>

					<div>
						<span>{ name }</span>
						<span>{ title }</span>
					</div>
				</>
				:
				''
			}
		</>
	)
}

function Testimonials () {

	const [ current, setCurrent ] = useState<number>(0)

	function increase	() {
		if (current < 2) {
			setCurrent(current + 1)
		}
	}

	function decrease	() {
		if (current > 0) {
			setCurrent(current - 1)
		}
	}

	return (
		<div className='testimonials'>
			<div className='testimonials-hdr-left'>
				<span>Testimonials</span>
				<span>Sound from our happy patners</span>
			</div>

			<div className='testimonials-hdr-right'>
				<div className='testimonials-hdr-right-cnt'>
					<span>200+</span>
					<span>Countries we deliver to and from, around the world</span>
				</div>

				<div className='testimonials-hdr-right-cnt'>
					<span>100k+</span>
					<span>Happy customers around the world</span>
				</div>

			</div>

			<div className='testimonials-cnt'>
				{/*<div>"Thank you very much Jetlog for saving my time. With  Jetlog, the delivery of goods is faster even though it is very far away. I also don't need to be scared and doubtful because Jetlog provides a place to store my shipping documents and makes it easier with excellent real-time updates."</div>


				<div>
					<span>Jobs Spencer Mathias</span>
					<span>Ceo of Spencer's Pharmaceuticals</span>
				</div>*/}

				{
					TestimonialArray.map((item) => (
						<TestimonialsInfo key={item.id} id={item.id} no={current} name={item.name} title={item.title} testimonial={item.testimonial} />
					))
				}

				<div>
					<span className={current == 0 ? 'opaque' : ''} onClick={decrease}> ← </span>
					<span className={current == 2 ? 'opaque' : ''} onClick={increase}> → </span>
				</div>
			</div>

			<div className='testimonials-img'>
				{
					current == 0
					?
					<img src={ceo1} />
					:
					current == 1
					?
					<img src={ceo2} />
					:
					<img src={ceo3} /> 
				}
			</div>
		</div>
	)
}


function PageContrast () {
	return (
		<div className='page-contrast'>
			<div>
				Looking for a Trustable Shipping Comany for your business?
			</div>

			<div>
				<button>Contact Us</button>
				<button>Learn More</button>
			</div>
		</div>
	)
}

function Page () {
	return (
		<div className='homepage'>
			<HeroSection />
			<Why />
			<OurServices />
			<Testimonials />
			<PageContrast />
		</div>
	)
}

export default Page