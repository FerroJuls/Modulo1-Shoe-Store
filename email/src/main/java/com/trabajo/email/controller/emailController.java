package com.trabajo.email.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@RestController
public class emailController {

	@Autowired
	private JavaMailSender javaMailSender;
	
	//Registro plataforma
	@GetMapping("/enviar-correo-registro")
	public String enviarCorreoBasica() {
		try {
			String destinatario="julifierrocasanova@gmail.com";
			String asunto="Registro exitoso";
			String cuerpo=""
					+"<h2>Estimado/a Usuario,</h2>"
					+"<p>Le damos la más cordial bienvenida a FerroJuls, la plataforma líder en moda y tendencias exclusivas.</p>"
					+"<p>Su cuenta ha sido creada con éxito, brindándole acceso a una experiencia de compra única y a las últimas colecciones de nuestras marcas asociadas.</p>"
					+"<p>En FerroJuls, nos esforzamos por ofrecer productos de calidad y un servicio excepcional. Le invitamos a explorar nuestro catálogo y descubrir las últimas novedades.</p>"
					+"<p>Si tiene alguna pregunta o necesita asistencia, no dude en ponerse en contacto con nuestro equipo de soporte. Estamos aquí para ayudarle.</p>"
					+"<p>Gracias por elegir FerroJuls. ¡Esperamos que disfrute de su experiencia de compra!</p>"
					+"<p>Atentamente,<br>El equipo de FerroJuls</p>"
					+"<img src='https://i.postimg.cc/WzDsp2Rc/IMG-0394.jpg'>";
			
			var retorno=enviarCorreo(destinatario,asunto,cuerpo);
			
			if(retorno) {
				return "Se envió correctamente";
			}else {
				return "Error no se pudo envíar";
			}
		}catch (Exception e) {
			return "Errer no se pudo envíar "+e.getMessage(); 
		}
	}
	
	public boolean enviarCorreo(String destinatario,String asunto,String cuerpo) throws MessagingException {
		try {
			MimeMessage message=javaMailSender.createMimeMessage();
			MimeMessageHelper helper=new MimeMessageHelper(message,true);
			helper.setTo(destinatario);
			helper.setSubject(asunto);
			helper.setText(cuerpo,true);
			
			javaMailSender.send(message);
			return true;
		}catch (Exception e) {
			return false; 
		}
	}
	

	//Recuperacion contaseña
	@GetMapping("/enviar-correo-recuperar")
	public String enviarCorreoBasica1() {
		try {
			String destinatario="julifierrocasanova@gmail.com";
			String asunto="Recuperar contraseña";
			String cuerpo=""
					+"<h2>Estimado/a Usuario,</h2>"
					+ "  <p>Esperamos que este mensaje le encuentre bien. Hemos recibido una solicitud para restablecer la contraseña de su cuenta en FerroJuls.</p>"
					+ "  <p>Por razones de seguridad, le proporcionamos el siguiente enlace para restablecer su contraseña. Por favor, haga clic en el enlace a continuación:</p>"
					+ "  <p><a href=\"enlace_para_recuperacion\">Restablecer Contraseña</a></p>"
					+ "  <p>Este enlace expirará en 24 horas. Si no ha solicitado esta acción, le recomendamos que contacte con nuestro equipo de soporte de inmediato.</p>"
					+ "  <p>Estamos aquí para ayudarle en todo momento.</p>"
					+ "  <p>Atentamente,<br>El equipo de FerroJuls</p>"
					+"<img src='https://i.postimg.cc/WzDsp2Rc/IMG-0394.jpg'>";
			var retorno=enviarCorreoo(destinatario,asunto,cuerpo);
			
			if(retorno) {
				return "Se envió correctamente";
			}else {
				return "Error no se pudo envíar";
			}
		}catch (Exception e) {
			return "Errer no se pudo envíar "+e.getMessage(); 
		}
	}
	
	public boolean enviarCorreoo(String destinatario,String asunto,String cuerpo) throws MessagingException {
		try {
			MimeMessage message=javaMailSender.createMimeMessage();
			MimeMessageHelper helper=new MimeMessageHelper(message,true);
			helper.setTo(destinatario);
			helper.setSubject(asunto);
			helper.setText(cuerpo,true);
			
			javaMailSender.send(message);
			return true;
		}catch (Exception e) {
			return false; 
		}
	}
	

	//Cambio contaseña
	@GetMapping("/enviar-correo-cambio")
	public String enviarCorreoBasica2() {
		try {
			String destinatario="julifierrocasanova@gmail.com";
			String asunto="Cambio de Contraseña";
			String cuerpo=""
					+"<h2>Estimado/a Usuario,</h2>"
					+ "<p>Le informamos que la contraseña de su cuenta en FerroJuls ha sido cambiada con éxito.</p>"
					+ "  <p>Si usted no ha realizado esta acción, le pedimos que contacte con nuestro equipo de soporte de inmediato para investigar cualquier actividad no autorizada en su cuenta.</p>"
					+ "  <p>La seguridad de nuestros clientes es nuestra máxima prioridad. Agradecemos su cooperación.</p>"
					+ "  <p>Atentamente,<br>El equipo de FerroJuls</p>"
					+"<img src='https://i.postimg.cc/WzDsp2Rc/IMG-0394.jpg'>";
			var retorno=enviarCorreooo(destinatario,asunto,cuerpo);
			
			if(retorno) {
				return "Se envió correctamente";
			}else {
				return "Error no se pudo envíar";
			}
		}catch (Exception e) {
			return "Errer no se pudo envíar "+e.getMessage(); 
		}
	}
	
	public boolean enviarCorreooo(String destinatario,String asunto,String cuerpo) throws MessagingException {
		try {
			MimeMessage message=javaMailSender.createMimeMessage();
			MimeMessageHelper helper=new MimeMessageHelper(message,true);
			helper.setTo(destinatario);
			helper.setSubject(asunto);
			helper.setText(cuerpo,true);
			
			javaMailSender.send(message);
			return true;
		}catch (Exception e) {
			return false; 
		}
	}
	

	//Notificacion Compra
	@GetMapping("/enviar-correo-compra")
	public String enviarCorreoBasica3() {
		try {
			String destinatario="julifierrocasanova@gmail.com";
			String asunto="Compra Exitosa";
			String cuerpo=""
					+"<h2>Estimado/a Usuario,</h2>"
					+ "<p>Le agradecemos sinceramente por su compra en FerroJuls. Su pedido ha sido confirmado y está en proceso de preparación para el envío.</p>"
					+ "  <p>Detalles de la compra:</p>"
					+ "  <ul>"
					+ "    <li><strong>Producto:</strong> Enterizo para niño</li>"
					+ "    <li><strong>Precio:</strong> $52.900</li>"
					+ "    <li><strong>Cantidad:</strong> 10</li>"
					+ "    <li><strong>Pago Total:</strong> $529.000</li>"
					+ "  </ul>"
					+ "  <p>Le enviaremos una notificación con el número de seguimiento una vez que su pedido haya sido despachado. Estamos seguros de que disfrutará de su nueva adquisición.</p>"
					+ "  <p>Gracias por confiar en FerroJuls. Si tiene alguna pregunta, no dude en ponerse en contacto con nuestro equipo de atención al cliente.</p>"
					+ "  <p>Atentamente,<br>El equipo de FerroJuls</p>"
					+"<img src='https://i.postimg.cc/WzDsp2Rc/IMG-0394.jpg'>";
			var retorno=enviarCorreoooo(destinatario,asunto,cuerpo);
			
			if(retorno) {
				return "Se envió correctamente";
			}else {
				return "Error no se pudo envíar";
			}
		}catch (Exception e) {
			return "Errer no se pudo envíar "+e.getMessage(); 
		}
	}
	
	public boolean enviarCorreoooo(String destinatario,String asunto,String cuerpo) throws MessagingException {
		try {
			MimeMessage message=javaMailSender.createMimeMessage();
			MimeMessageHelper helper=new MimeMessageHelper(message,true);
			helper.setTo(destinatario);
			helper.setSubject(asunto);
			helper.setText(cuerpo,true);
			
			javaMailSender.send(message);
			return true;
		}catch (Exception e) {
			return false; 
		}
	}
	
	
}
