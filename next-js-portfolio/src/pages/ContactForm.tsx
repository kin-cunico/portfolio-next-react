import * as React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function ContactUs() {
	const formik = useFormik({
		initialValues: {
			name: "",
			email: "",
			message: "",
		},
		validationSchema: Yup.object({
			name: Yup.string()
				.max(20, "20 characters or less")
				.min(3, "3 characters or more")
				.required("required"),

			email: Yup.string()
				.email()
				.max(40, "40 characters or less")
				.min(4, "4 characters or more")
				.required("required"),
			message: Yup.string()
				.max(600, "600 characters or less")
				.min(20, "20 characters or more")
				.required("required"),
		}),
		onSubmit: (values) => {
			console.log(values);
		},
	});
	return (
		<form
			method="POST"
			action="https://formsubmit.co/4fbffeb79bf315fd896dbdc4cf8c7add"
			className="flex flex-col gap-4 flex-wrap align-middle items-center"
			target="_blank"
		>
			<div className="flex gap-2 justify-center flex-wrap">
				<label className="">
					<input
						type="text"
						role="user-name"
						id="name"
						name="name"
						placeholder="your name"
						className="text-center placeholder:text-lime-600 bg-slate-800 rounded-lg text-lime-500"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.name}
					/>
					{formik.touched.name && formik.errors.name ? (
						<p className="text-red-700 text-center">{formik.errors.name}</p>
					) : null}
				</label>
				<label>
					<input
						type="email"
						minLength={4}
						maxLength={40}
						id="email"
						role="user-email"
						name="email"
						required
						placeholder="your email"
						className="text-center placeholder:text-lime-600 bg-slate-800 rounded-lg text-lime-500"
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
					/>
					{formik.touched.email && formik.errors.email ? (
						<p className="text-red-700 text-center">{formik.errors.email}</p>
					) : null}
				</label>
			</div>
			<div className="flex flex-col justify-center items-center flex-wrap gap-2">
				<textarea
					id="message"
					name="message"
					role="user-message"
					minLength={20}
					maxLength={600}
					required
					placeholder="write your query here"
					className="text-justify p-2 placeholder:text-lime-600 flex flex-wrap justify-center w-80 h-80 bg-slate-800 rounded-lg text-lime-500"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.message}
				/>
				{formik.touched.message && formik.errors.message ? (
					<p className="text-red-700 text-center">{formik.errors.message}</p>
				) : null}
				<button
					type="submit"
					className="bg-lime-500 box-border w-20 text-center rounded-lg"
				>
					Submit
				</button>
			</div>
		</form>
	);
}
