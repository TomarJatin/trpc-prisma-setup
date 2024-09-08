import {
	z,
	ZodArray,
	ZodNullable,
	ZodObject,
	ZodOptional,
	type ZodRawShape,
	type ZodTypeAny,
} from "zod";
type Nullable<T> = T extends ZodTypeAny ? ZodNullable<T> : never;
type NullableShape<T extends ZodRawShape> = {
	[K in keyof T]: Nullable<ReturnType<typeof makeAllZodFieldsNullable<T[K]>>>;
};
export function makeAllZodFieldsNullable<T extends ZodTypeAny>(
	schema: T
): T extends ZodObject<infer Shape extends ZodRawShape>
	? ZodObject<NullableShape<Shape>>
	: T extends ZodArray<infer ElementType>
		? ZodArray<ReturnType<typeof makeAllZodFieldsNullable<ElementType>>>
		: Nullable<T> {
	if (schema instanceof ZodObject) {
		const shape = schema.shape;
		const newShape: any = {};
		for (const key in shape) {
			newShape[key] = makeAllZodFieldsNullable(shape[key]);
		}
		return z.object(newShape) as any;
	} else if (schema instanceof ZodArray) {
		return z.array(makeAllZodFieldsNullable(schema.element)) as any;
	} else if (schema instanceof ZodNullable) {
		return schema as any;
	} else {
		return schema.nullable() as any;
	}
}

export function makeAllZodFieldsOptional<T extends ZodTypeAny>(
	schema: T
): T extends ZodObject<infer Shape extends ZodRawShape>
	? ZodObject<{
			[K in keyof Shape]: ZodOptional<
				ReturnType<typeof makeAllZodFieldsOptional<Shape[K]>>
			>;
		}>
	: T extends ZodArray<infer ElementType>
		? ZodArray<ReturnType<typeof makeAllZodFieldsOptional<ElementType>>>
		: ZodOptional<T> {
	if (schema instanceof ZodObject) {
		const shape = schema.shape;
		const newShape: any = {};
		for (const key in shape) {
			newShape[key] = makeAllZodFieldsOptional(shape[key]).optional();
		}
		return z.object(newShape) as any;
	} else if (schema instanceof ZodArray) {
		return z.array(makeAllZodFieldsOptional(schema.element)) as any;
	} else if (schema instanceof ZodOptional) {
		return schema as any;
	} else {
		return schema.optional() as any;
	}
}

export function makeAllZodFieldsOptionalAndNullable<T extends ZodTypeAny>(
	schema: T
): T extends ZodObject<infer Shape extends ZodRawShape>
	? ZodObject<{
			[K in keyof Shape]: ZodOptional<
				ZodNullable<
					ReturnType<
						typeof makeAllZodFieldsOptionalAndNullable<Shape[K]>
					>
				>
			>;
		}>
	: T extends ZodArray<infer ElementType>
		? ZodArray<
				ReturnType<
					typeof makeAllZodFieldsOptionalAndNullable<ElementType>
				>
			>
		: ZodOptional<ZodNullable<T>> {
	if (schema instanceof ZodObject) {
		const shape = schema.shape;
		const newShape: any = {};
		for (const key in shape) {
			newShape[key] = makeAllZodFieldsOptionalAndNullable(shape[key])
				.optional()
				.nullable();
		}
		return z.object(newShape) as any;
	} else if (schema instanceof ZodArray) {
		return z.array(
			makeAllZodFieldsOptionalAndNullable(schema.element)
		) as any;
	} else if (schema instanceof ZodOptional) {
		return schema.nullable() as any;
	} else if (schema instanceof ZodNullable) {
		return schema.optional() as any;
	} else {
		return schema.optional().nullable() as any;
	}
}
