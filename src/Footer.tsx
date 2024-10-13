import './App.css'
import './App.mobile.css'

export function Footer () {
	return (
		<div className='footer'>
			<div className='footer-info'>
				<div>
					<div className='footer-logo'>
						JetLog
					</div>

					<div className='footer-info-cnt'>
						JetLog is a shipping company that helps you to transport your logistics without worry anymore.
					</div>
				</div>

				<div className='footer-info-copyright'>
					©Copyright 2023 JetLog. All Rights Reserved
				</div>
			</div>

			<div className='footer-main'>
				<div className='footer-main-item'>
					<span>Services</span>

					<div>
						<span>Inland Shipment</span>
						<span>Overseas Shipment</span>
						<span>Intercontinental Shipment</span>
						<span>Continental Shipment</span>
					</div>
				</div>

				<div className='footer-main-item'>
					<span>Contact</span>

					<div>
						<span>Instagram</span>
						<span>Facebook</span>
						<span>Twitter</span>
						<span>Linkedin</span>
					</div>
				</div>

				<div className='footer-main-item'>
					<span>About</span>

					<div>
						<span>Insurance</span>
						<span>Resources</span>
						<span>Terms & Conditions</span>
					</div>
				</div>

			</div>
		</div>
	)
}