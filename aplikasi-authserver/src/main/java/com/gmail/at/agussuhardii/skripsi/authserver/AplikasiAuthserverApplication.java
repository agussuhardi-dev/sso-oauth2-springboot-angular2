package com.gmail.at.agussuhardii.skripsi.authserver;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;

@SpringBootApplication
@Controller
public class AplikasiAuthserverApplication {

	public static void main(String[] args) {
		SpringApplication.run(AplikasiAuthserverApplication.class, args);
	}

	@GetMapping("/protected")
	public void protectedPage() {}

	@Bean
	public Docket api() {
		return new Docket(DocumentationType.SWAGGER_2)
				.select()
				.apis(RequestHandlerSelectors.any())
				.paths(PathSelectors.any())
				.build()
				.apiInfo(apiInfo());
	}

	private ApiInfo apiInfo() {
		ApiInfo apiInfo = new ApiInfo(
				"Aplikasi Gadai Online",
				"API untuk melakukan Gadai Online.",
				"Syarat dan Ketentuan",
				"Silahkan digunakan sewajarnya",
				new Contact("ArtiVisi Intermedia", "http://artivisi.com", "info@artivisi.com"),
				"Apache License 2.0",
				"https://www.apache.org/licenses/LICENSE-2.0");
		return apiInfo;
	}
}
