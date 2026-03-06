import { processDocument } from "../services/documentServices";

export const handleProcessDocument = async (req: any, res: any, next: any) => {
  try {
      const result = await processDocument();
      return res.status(200).json({ data: result });
  } catch (err: any) {   
      console.error(`Error while processing the document`, err.message);
      next(err);
  }
}