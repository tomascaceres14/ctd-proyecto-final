import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import axios from "axios";
import platformData from "@/assets/platforms.json";
import { HeaderContainer, Container, AvatarContainer, TitleContainer } from "@/styles/pages.styles/admin.styles";
import {
	FormContainer,
	GeneralInfo,
	SectionTitle,
	GenreAvailabilityRatings,
	Label,
	Input,
	SubmitButton,
} from "@styles/pages.styles/addMovie.styles";

const AddMovie = () => {
	const [formData, setFormData] = useState({
		title: "",
		actors: "",
		director: "",
		composer: "",
		review: "",
		image_url: "",
		trailer_url: "",
		rt_score: "",
		imdb_score: "",
		mc_score: "",
		genres: [],
		platforms: [],
		comments: [],
		score: "",
		release_date: "",
	});
	const generosList = [
		"Acción",
		"Drama",
		"Comedia",
		"Aventura",
		"Fantasía",
		"Musical",
		"Documental",
		"Animación",
		"Terror",
		"Deporte",
		"Romance",
		"Familia",
	];
	const plataformasList = platformData;
	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleCheckboxChange = (e) => {
		const { name, value, checked } = e.target;
		const updatedArray = checked ? [...formData[name], value] : formData[name].filter((item) => item !== value);
		setFormData({
			...formData,
			[name]: updatedArray,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// Enviar la solicitud POST con Axios
		axios
			.post("https://83n5sz9zvl.execute-api.us-east-1.amazonaws.com/api/v1/movies", formData)

			.then((response) => {
				console.log("Respuesta de la API:", response.data);
				alert("se agrego la pelicula con exito", response.data);
			})
			.catch((error) => {
				console.error("Error al enviar la solicitud:", error);
				alert("algo salio mal", error);
				console.log("body que se envia:", formData);
			});
	};
	return (
		<>
			<Head>
				<meta
					name="add movie"
					content="Esta seccion es de uso privado para administradores de la pagina web para agregar peliculas"
				/>
			</Head>
			<HeaderContainer>
				<Container>
					<AvatarContainer>
						<div>
							<h2>
								<Image src="images/plus.svg" alt="plus sign" width={54} height={54} className="icon" />
							</h2>
						</div>
					</AvatarContainer>
					<TitleContainer>
						<h2>Agregar película</h2>
					</TitleContainer>
				</Container>
			</HeaderContainer>

			<form onSubmit={handleSubmit}>
				<FormContainer>
					<GeneralInfo>
						<SectionTitle>Datos generales</SectionTitle>
						<div className="info-group">
							<div className="info-field">
								<Label htmlFor="title">Título</Label>
								<Input
									type="text"
									id="title"
									name="title"
									value={formData.title}
									onChange={handleInputChange}
									required
								/>
							</div>
							<div className="info-field">
								<Label htmlFor="actors">Elenco</Label>
								<Input
									type="text"
									id="actors"
									name="actors"
									value={formData.actors}
									onChange={handleInputChange}
									required
								/>
							</div>
						</div>
						<div className="info-group">
							<div className="info-field">
								<Label htmlFor="director">Director</Label>
								<Input
									type="text"
									id="director"
									name="director"
									value={formData.director}
									onChange={handleInputChange}
									required
								/>
							</div>
							<div className="info-field">
								<Label htmlFor="composer">Compositor</Label>
								<Input
									type="text"
									id="composer"
									name="composer"
									value={formData.composer}
									onChange={handleInputChange}
									required
								/>
							</div>
						</div>

						<div className="info-group">
							<div className="info-field">
								<Label htmlFor="trailer_url">Link trailer</Label>
								<Input
									type="text"
									id="trailer_url"
									name="trailer_url"
									value={formData.trailer_url}
									onChange={handleInputChange}
									required
								/>
							</div>
							<div className="info-field">
								<Label htmlFor="release_date">Fecha de estreno</Label>
								<Input
									type="text"
									id="release_date"
									name="release_date"
									value={formData.release_date}
									onChange={handleInputChange}
									required
								/>
							</div>
						</div>
						<div className="info-field">
							<Label htmlFor="image_url">Poster pelicula</Label>
							<Input
								type="text"
								id="image_url"
								name="image_url"
								value={formData.image_url}
								onChange={handleInputChange}
								// required
							/>
						</div>
						<div className="info-field">
							<Label htmlFor="review">Review</Label>
							<textarea
								type="text"
								id="review"
								name="review"
								value={formData.review}
								onChange={handleInputChange}
								required
								rows={5}
								className="custom-textarea"
							></textarea>
						</div>
					</GeneralInfo>

					<GenreAvailabilityRatings>
						<div className="genre-group">
							<SectionTitle>Géneros</SectionTitle>
							<div className="genre-fields">
								{generosList.map((genero, index) => (
									<div key={genero} className="genre-field">
										<input
											type="checkbox"
											name="genres"
											value={genero}
											checked={formData.genres.includes(genero)}
											onChange={handleCheckboxChange}
										/>{" "}
										{genero}
									</div>
								))}
							</div>
						</div>
						<div className="availability-group">
							<SectionTitle>Disponibilidad</SectionTitle>
							<div className="availability-fields">
								{plataformasList.map((platform) => (
									<div key={platform.id} className="availability-field">
										<label className="platform-label">
											<input
												type="checkbox"
												name="platforms"
												value={platform.label}
												checked={formData.platforms.includes(platform.label)}
												onChange={handleCheckboxChange}
											/>
											<Image src={platform.value} alt={platform.label} width={50} height={50} />
										</label>
									</div>
								))}
							</div>
						</div>

						<div className="califi-group">
							<SectionTitle>Calificaciones</SectionTitle>
							<div className="califi-fields">
								<div className="califi-field">
									<Input
										type="text"
										id="imdb_score"
										name="imdb_score"
										value={formData.imdb_score}
										onChange={handleInputChange}
										required
										className="calification"
									/>
									<Label htmlFor="imdb_score">IMDb</Label>
								</div>
								<div className="califi-field">
									<Input
										type="text"
										id="mc_score"
										name="mc_score"
										value={formData.mc_score}
										onChange={handleInputChange}
										required
										className="calification"
									/>
									<Label htmlFor="mc_score">Metacritic</Label>
								</div>
								<div className="califi-field">
									<Input
										type="text"
										id="rt_score"
										name="rt_score"
										value={formData.rt_score}
										onChange={handleInputChange}
										required
										className="calification"
									/>
									<Label htmlFor="rt_score">Rotten Tomatoes</Label>
								</div>
							</div>
						</div>
					</GenreAvailabilityRatings>
				</FormContainer>

				<SubmitButton type="submit">Crear Pelicula</SubmitButton>
			</form>
		</>
	);
};

export default AddMovie;