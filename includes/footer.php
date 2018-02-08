<footer id="footer">
	<div class="footer_main_container w100p">
		<div class="footer_container w1200 row">
			<div class="footer_content">
				<div class="gallery_container col-4 left">
					<h4 class="border-inc t_uppercase">gallery</h4>
					<div class="min_border p10-0 clearfix">
						<div class="left"><span class="left"></span></div>
					</div>
					<?php include "includes/gallery.php";?>
				</div>
				<div class="col-4 left">
					<div class="quick_list_container">
						<h4 class="border-inc t_uppercase">quick list</h4>
						<div class="min_border p10-0 clearfix">
							<div class="w50p left"><span class="left w7p"></span></div>
						</div>
						<ul class="quick_list_content clearfix p20-0">
							<li class="left w100p p10-0">
								<a href="#" class="bold">Abouth Company</a>
							</li>
							<li class="left w100p p10-0">
								<a href="#" class="bold">Services</a>
							</li>
							<li class="left w100p p10-0">
								<a href="#" class="bold">Terms & Condition</a>
							</li>
							<li class="left w100p p10-0">
								<a href="#" class="bold">Privacy Policy</a>
							</li>
							<li class="left w100p p10-0">
								<a href="#" class="bold">Contact Us</a>
							</li>
						</ul>
					</div>
				</div>
				<div class="col-4 right">
					<div class="contact_container">
						<h4 class="border-inc t_uppercase">contact us</h4>
						<div class="min_border p10-0 clearfix">
							<div class="w50p left"><span class="left w7p"></span></div>
						</div>
						<form id="js_contact_form" class="p10-0">

							<div class="form-field">
								<input id="name" class="w100p" type="text" name="name" placeholder="Your Name (required)"
									   data-rule-required="true" data-msg-required="This field is required"/>
							</div>

							<div class="form-field">
								<input id="email" class="w100p" type="text" name="email" placeholder="Your E-mail (required)"
									   data-rule-required="true" data-msg-required="This field is required"
									   data-rule-email="true" data-email-required="Please enter a valid email address" />
							</div>

							<div class="form-field">
								<input id="subject" class="w100p" type="text" name="subject" placeholder="Subject"
									   data-rule-required="true" data-msg-required="This field is required"/>
							</div>

							<div class="form-field">
								<textarea id="maessage" class="w100p" type="text" placeholder="Your Message" name="message"
										  data-rule-required="true" data-msg-required="This field is required"></textarea>

							</div>

							<button type="submit">Submit</button>
						</form>

					</div>
				</div>
			</div>
			<div class="social_container clearfix t_align w100p">
				<div class="social_content">
					<span><i class="fa fa-facebook fa-lg" aria-hidden="true"></i></span>
					<span><i class="fa fa-twitter fa-lg" aria-hidden="true"></i></span>
					<span><i class="fa fa-instagram fa-lg" aria-hidden="true"></i></span>
					<span><i class="fa fa-youtube fa-lg" aria-hidden="true"></i></span>
				</div>
			</div>
		</div>
	</div>
	<div class="copyrights_container w100p">
		<div class="copyrights_content t_align w1200">
			<div><p>Copyrights © 2017 All Rights Reserved</p></div>
		</div>
	</div>
	<div class="top-btn_wrapper" title="Na vrh">
		<button class="top-btn" type="button">
			<i class="fa fa-long-arrow-up" aria-hidden="true"></i>
		</button>
	</div>
	<div id="personal_menager_wrapper" class="clearfix absolute right0 bottom0">
		<div class="personal_menager_title p20 col-12 right ">
			<span class="t_uppercase bold">personal menager</span>
			<i class="fa fa-chevron-up" aria-hidden="true"></i>
		</div>
		<div class="personal_menager_content p15 right no-display">
			<div class="clearfix">
				<div class="menager_image_wrapper w30p left">
					<div class="menager_image">
						<img src="img/menager_image.png">
					</div>
				</div>
				<div class="mail_skype p0-10 left">
					<p>Dave Murray</p>
					<div class="w100p">
						<a href="#">mineles.dave</a>
					</div>
					<div class="w100p">
						<a href="#">dave@mineles.com</a>
					</div>
				</div>
			</div>
			<span class="left w100p">Online</span>
			<textarea class="w100p" name="text" type="text" placeholder="typing"></textarea>
		</div>
	</div>
</footer>